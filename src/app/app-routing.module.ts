import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuhtComponent } from './auht/auht.component';
import { HomeComponent } from './dashboard/pages/home/home.component';
import { UsersComponent } from './dashboard/pages/users/users.component';

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
  path:'users',
  component:UsersComponent,
},
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
