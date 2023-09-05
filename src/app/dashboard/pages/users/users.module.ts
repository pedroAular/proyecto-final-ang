import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { UsersFormDialogComponent } from './components/users-form-dialog/users-form-dialog.component';
import { UsersTableComponent } from './components/users-table/users-table.component';
import { MatTableModule } from '@angular/material/table';
import { UserDetailComponent } from './pages/user-detail/user-detail.component';
import { UsersRoutingModule } from './users-routing.module';

@NgModule({
  declarations: [
    UsersComponent, 
    UsersFormDialogComponent,
    UsersTableComponent,
    UserDetailComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatTableModule,
     UsersRoutingModule,
  ],
  exports: [
    UsersComponent,
  ],
  providers: []
})
export class UsersModule { }
