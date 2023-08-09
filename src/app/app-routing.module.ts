import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuhtComponent } from './auht/auht.component';
import { authGuard } from './core/auth.guard';

const routes: Routes = [
{
path: 'dashboard',
canActivate:[authGuard],
component: DashboardComponent,
loadChildren:()=> import('./dashboard/dashboard.module').then((m) => m.DashboardModule)
},
{ 
  path: 'auth',
  component:AuhtComponent,
  loadChildren:() => import('./auht/auht.module').then((m) => m.AuhtModule)
},
{
  path: '**',
  redirectTo: '/auth/login'
}, 


]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
