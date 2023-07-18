import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UsersFormDialogComponent } from './components/users-form-dialog/users-form-dialog.component';
import { users } from './models';

let ELEMENT_DATA: users[] = [
  {
    id: 1,
    name: 'Marcos',
    surname: 'rodriguez',
    email: 'p@default.com',
    password: 'Pe22##',
  },
];

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  public users: users[] = ELEMENT_DATA;

  constructor(private matDialog: MatDialog) {}

  onCreateUser(): void {
    let dialogRef = this.matDialog.open(UsersFormDialogComponent);
    dialogRef.afterClosed().subscribe((v) => {
      if (v) {
        const newUser: users = {
          id: this.users.length + 1,
          name: v.name,
          surname: v.surname,
          email: v.email,
          password: v.password,
        };
        this.users = [...this.users, newUser];
        console.log('Recibimos el valor', v);
      } else {
        console.log('SE Cancela la inscripción');
      }
    });
  }
}
