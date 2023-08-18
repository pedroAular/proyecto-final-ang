import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // Importa RouterModule para poder usarlo
import { UsersComponent } from './users.component';
import { UserDetailComponent } from './pages/user-detail/user-detail.component';


@NgModule({
  declarations: [
    UsersComponent,
    UserDetailComponent
  ], // Asegúrate de incluir los componentes en declarations
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: UsersComponent,
      },
      {
        path: ':id',
        component: UserDetailComponent,
      }
    ])
  ],
  exports: [RouterModule]
})
export class UsersRountigModuleTs { }
