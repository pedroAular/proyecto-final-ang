import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { minLengthValidator, passwordValidator } from 'src/app/shared/utils/form-validators';

@Component({
  selector: 'app-users-form-dialog',
  templateUrl: './users-form-dialog.component.html',
  styleUrls: ['./users-form-dialog.component.scss']
})
export class UsersFormDialogComponent {

  nameControl = new FormControl(null, [
    Validators.required,
    Validators.minLength(3),
    Validators.pattern(/^[a-zA-Z ]+$/),
    minLengthValidator(3)
  ]);

  surnameControl = new FormControl(null, [
    Validators.required,
    Validators.minLength(3),
    Validators.pattern(/^[a-zA-Z ]+$/),
    minLengthValidator(3)
  ]);

  emailControl = new FormControl(null, [
    Validators.required,
    Validators.email,
  ]);

  passwordControl = new FormControl(null, [
    Validators.required,
    passwordValidator
  ]);

  userForm = new FormGroup({
    name: this.nameControl,
    surname: this.surnameControl,
    email: this.emailControl,
    password: this.passwordControl,
  });
  
constructor(private dialogRef: MatDialogRef<UsersFormDialogComponent>){}

  onSubmit():void {
    if(this.userForm.invalid){
      this.userForm.markAllAsTouched();
    }else{
      this.dialogRef.close(this.userForm.value)
    }
    

    }
}
