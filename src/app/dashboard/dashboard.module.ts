import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { HomeModule } from './pages/home/home.module';
import { UsersModule } from './pages/users/users.module';
import {MatListModule} from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { dashboardRoutingModule } from './dashboard-routing-module';



@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    dashboardRoutingModule,
    CommonModule,
    MatSidenavModule,
    MatButtonModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    HomeModule,
    RouterModule,
    UsersModule, 
    
  ],
  exports:[DashboardComponent],
})

export class DashboardModule { }
