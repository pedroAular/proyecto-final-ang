import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuhtComponent } from './auht/auht.component';
import { HomeComponent } from './dashboard/pages/home/home.component';
import { UsersComponent } from './dashboard/pages/users/users.component';
import { UserDetailComponent } from './dashboard/pages/users/pages/user-detail/user-detail.component';

const routes: Routes = [
{
path: 'dashboard',
component: DashboardComponent,
children:[
{
  path:'homme',
  component: HomeComponent,
},
{
  path: 'users',
  children: [{
    path: '',
    component: UsersComponent,
  },
  {
  path:':id',
  component:UserDetailComponent,
  }

  ]
},
/* {
  path:'users',
  component:UsersComponent,
},
{
path:'users/:id',
component : UserDetailComponent,
}, */
{
  path:'**',
  redirectTo: 'homme'
}
]
},
{
  path: 'auth',
  component:AuhtComponent
},
{
  path: '**',
  redirectTo: '/auth'
},


]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
