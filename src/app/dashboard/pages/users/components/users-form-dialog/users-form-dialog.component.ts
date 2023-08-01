import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { minLengthValidator, passwordValidator } from 'src/app/shared/utils/form-validators';
import { users } from '../../models';

@Component({
  selector: 'app-users-form-dialog',
  templateUrl: './users-form-dialog.component.html',
  styleUrls: ['./users-form-dialog.component.scss']
})
export class UsersFormDialogComponent {
editinUsers?: users;
  nameControl = new FormControl <string | null >(null, [
    Validators.required,
    Validators.minLength(3),
    Validators.pattern(/^[a-zA-Z ]+$/),
    minLengthValidator(3)
  ]);

  surnameControl = new FormControl <string | null >(null, [
    Validators.required,
    Validators.minLength(3),
    Validators.pattern(/^[a-zA-Z ]+$/),
    minLengthValidator(3)
  ]);

  emailControl = new FormControl <string | null >(null, [
    Validators.required,
    Validators.email,
  ]);

  passwordControl = new FormControl <string | null >(null, [
    Validators.required,
    passwordValidator
  ]);

  userForm = new FormGroup({
    name: this.nameControl,
    surname: this.surnameControl,
    email: this.emailControl,
    password: this.passwordControl,
  });
  
constructor(private dialogRef: MatDialogRef<UsersFormDialogComponent>,
  @Inject (MAT_DIALOG_DATA) private data?:users,
  ){
    if (this.data){
      this.editinUsers = this.data
      this.nameControl.setValue(this.data.name)
      this.surnameControl.setValue(this.data.surname)
      this.emailControl.setValue( this.data.email)
      this.passwordControl.setValue(this.data.password)
    }
  }

  onSubmit():void {
    if(this.userForm.invalid){
      this.userForm.markAllAsTouched();
    }else{
      this.dialogRef.close(this.userForm.value)
    }
    

    }
}
