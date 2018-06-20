import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/auth.guard';
import { MapsDashboardComponent } from './maps-dashboard/maps-dashboard.component';
import { LoginScreenComponent } from './login-screen/login-screen.component';

const routes: Routes = [
  {path: 'login', component: LoginScreenComponent},
  {path: 'map', component: MapsDashboardComponent, canActivate: [AuthGuard]},
  {path: '**', redirectTo: 'map', pathMatch: 'full'},

]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
