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
import { NavMenuComponent } from './layout/nav-menu/nav-menu.component';
import { ToolbarComponent } from './layout/toolbar/toolbar.component';




@NgModule({
  declarations: [
    DashboardComponent,
    NavMenuComponent,
    ToolbarComponent,
    
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
