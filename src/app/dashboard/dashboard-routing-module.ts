import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { UserDetailComponent } from './pages/users/pages/user-detail/user-detail.component';
import { UsersComponent } from './pages/users/users.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'users',
        loadChildren: () => import ('./pages/users/users.module').then((m) => m.UsersModule)
      },
      
      {
        path: '**',
        redirectTo: 'home'
      }
    ])
  ],
  exports: [RouterModule] 
})
export class dashboardRoutingModule {}
