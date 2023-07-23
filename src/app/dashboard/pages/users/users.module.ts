import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { UsersFormDialogComponent } from './components/users-form-dialog/users-form-dialog.component';
import { UsersTableComponent } from './components/users-table/users-table.component';
import { MatTableModule } from '@angular/material/table';




@NgModule({
  declarations: [
    UsersComponent,
    UsersFormDialogComponent,
    UsersTableComponent,
      ],
  imports: [
    CommonModule,
    SharedModule,
    MatTableModule,
    

  ],
  exports:[
    UsersComponent,
  ],
  providers:[]
})
export class UsersModule { }
