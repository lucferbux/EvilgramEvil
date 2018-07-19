import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapsDashboardComponent } from './maps-dashboard/maps-dashboard.component';


const routes: Routes = [
  {path: 'map', component: MapsDashboardComponent},
  {path: '**', redirectTo: 'map', pathMatch: 'full'},

]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
