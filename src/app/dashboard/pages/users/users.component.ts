import { Component, } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UsersFormDialogComponent } from './components/users-form-dialog/users-form-dialog.component';
import { users } from './models';
import { UsersService } from './users.service';
import { NotifierService } from 'src/app/core/services/notifier.service';
import { Observable, tap,} from 'rxjs';
import { map } from 'rxjs';



@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
  export class UsersComponent {
  public users: Observable<users[]>;
  public isLoading$: Observable<boolean>
  constructor(
    private matDialog: MatDialog, 
    private usersService: UsersService,
    private notifier: NotifierService,

    ) {
    this.isLoading$=this.usersService.isLoading$
    this.usersService.loadUsers();
    this.users= this.usersService.getUsers().pipe(
      tap((valor) =>console.log('VALOR', valor)),
      map((valor)=> valor.map((usuario)=> ({...usuario, 
        name:usuario.name.toUpperCase(),
        surname: usuario.surname.toUpperCase(),
      }))
      ),
      tap((valor) =>console.log('VALOR despues del map', valor)),
    );

    }

  onCreateUser(): void {
    let dialogRef = this.matDialog.open(UsersFormDialogComponent);
    dialogRef.afterClosed().subscribe((v) => {
      if (v) {
      this.notifier.showSuccess ('se cargaron los usuarios')
      this.usersService.createUser({

          name: v.name,
          surname: v.surname,
          email: v.email,
          password: v.password,})
      }
    });
  }

  ondelateusers(usersToDelete: users): void {
    if (confirm(`¿Estás seguro de eliminar a ${usersToDelete.name}?`)) {
      this.usersService.usersToDelete(usersToDelete.id); 
    }
  }
  

  onEditUsers(usersToEdit: users): void {
    let dialogRef = this.matDialog.open(UsersFormDialogComponent, {
      data: usersToEdit
    });
    dialogRef
    .afterClosed()
    .subscribe((usersUpdated) => {
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
    });
  }
}