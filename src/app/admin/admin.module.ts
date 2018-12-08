import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListComponent } from './products/list/list.component';
import { CreateComponent } from './products/create/create.component';
import { EditComponent } from './products/edit/edit.component';
import { AdminComponent } from './admin.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [
    DashboardComponent,
    ListComponent,
    CreateComponent,
    EditComponent,
    AdminComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
