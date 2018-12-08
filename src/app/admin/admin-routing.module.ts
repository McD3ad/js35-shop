import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './products/list/list.component';
import { CreateComponent } from './products/create/create.component';
import { EditComponent } from './products/edit/edit.component';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        component: DashboardComponent
      },
      {
        path: 'products',
        component: ListComponent,
      },
      {
        path: 'products/create',
        component: CreateComponent,
      },
      {
        path: 'products/:id/edit',
        component: EditComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
