import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { Role } from './login/login.model';
import { AuthGuard } from './_core/guards/auth.guard';
import { AdminComponent } from './admin/admin.component';


const routes: Routes = [
  // { path: '', pathMatch: 'full', component: LoginComponent },
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule)},
  { path: 'home', component: HomeComponent, canActivate : [AuthGuard], data: { roles: [Role.User]}}, 
  { path: 'admin', component: AdminComponent, canActivate : [AuthGuard], data: { roles: [Role.Admin]}},
  { path: '**', redirectTo: 'login'} 
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
