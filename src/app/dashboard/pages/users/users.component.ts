import { Component, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UsersFormDialogComponent } from './components/users-form-dialog/users-form-dialog.component';
import { users } from './models';
import { UsersService } from './users.service';
import { NotifierService } from 'src/app/core/services/notifier.service';
import { Observable, Subscription} from 'rxjs';
import { map } from 'rxjs';



@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  public users: Observable<users[]>;

  constructor(
    private matDialog: MatDialog, 
    private usersService: UsersService,
    private notifier: NotifierService,
    ) {
    this.usersService.loadUsers();
    this.users= this.usersService.getUsers();
    
     }

  onCreateUser(): void {
    let dialogRef = this.matDialog.open(UsersFormDialogComponent);
    dialogRef.afterClosed().subscribe((v) => {
      if (v) {
      this.notifier.showSuccess ('se cargaron los usuarios')
      this.usersService.createUser({
       
          id: new Date().getTime(),
          name: v.name,
          surname: v.surname,
          email: v.email,
          password: v.password,})



        console.log('Recibimos el valor', v);
      } else {
        console.log('SE Cancela la inscripción');
      }
    });
  }

  ondelateusers(usersToDelete: users): void {
    console.log(usersToDelete);
    if (confirm(`¿estas seguro de eliminar a ${usersToDelete.name}?`)) {
      this.users = this.users.pipe(
        map(usersArray => usersArray.filter (u => u.id !== usersToDelete.id))
      );
    }
  
  }

  onEditUsers(usersToEdit: users): void {
    console.log(usersToEdit)
    let dialogRef = this.matDialog.open(UsersFormDialogComponent, {
      data: usersToEdit
    });
    dialogRef.afterClosed().subscribe((usersUpdated) => {
      if (usersUpdated) {
        this.users = this.users.pipe (
           map(usersArray => usersArray.map (user => {
          if (user.id === usersToEdit.id) {
            return {
              ...user,
              name: usersUpdated.name,
              surname: usersUpdated.surname,
              email: usersUpdated.email,
              password: usersUpdated.password,
            };
          }
          return user;
        }))
        );
      }
      console.log(usersUpdated)
    });
  }
}