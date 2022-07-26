import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {DomesticComponent} from "./domestic/domestic.component";
import {HealthComponent}  from "./health/health.component";
import { EducationComponent } from './education/education.component';
import { LawyerComponent } from './lawyer/lawyer.component';
import { ArtComponent } from './art/art.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';
const routes: Routes = [
  {path:'',component: HomeComponent},
  {path:'trong-nuoc',component:DomesticComponent},
  {path:'suc-khoe', component:HealthComponent},
  {path:'giao-duc', component:EducationComponent},
  {path:'phap-luat', component:LawyerComponent},
  {path:'nghe-thuat', component:ArtComponent},
  {path:'giai-tri', component:EntertainmentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
