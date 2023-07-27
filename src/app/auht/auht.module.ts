import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuhtComponent } from './auht.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AuhtComponent,
    LoginComponent,
    
    RegisterComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
  ]
})
export class AuhtModule { }
