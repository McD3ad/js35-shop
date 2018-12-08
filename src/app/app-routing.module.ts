import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './front/home/home.component';
import { AuthGuard } from './guards/auth/auth.guard';
import { FrontComponent } from './front/front.component';
import { RoleGuard } from './guards/role/role.guard';

const routes: Routes = [
  {
    path: '',
    component: FrontComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      }
    ]
  },
  {
    path: 'admin',
    loadChildren: './admin/admin.module#AdminModule',
    canActivate: [AuthGuard, RoleGuard]
  },
  {
    path: 'profile',
    loadChildren: './profile/profile.module#ProfileModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'auth',
    loadChildren: './auth/auth.module#AuthModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
