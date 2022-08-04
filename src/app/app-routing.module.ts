import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {DomesticComponent} from "./domestic/domestic.component";
import {ForeignComponent} from "./foreign/foreign.component";
// import {ListNewsSearchComponent} from "./list-news-search/list-news-search.component";
// import {NewsDetailComponent} from "./news-detail/news-detail.component";
import {HealthComponent}  from "./health/health.component";
import { EducationComponent } from './education/education.component';
import { LawyerComponent } from './lawyer/lawyer.component';
import { ArtComponent } from './art/art.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import {RegisterComponent} from "./register/register.component";
import {LoginComponent} from "./login/login.component";

const routes: Routes = [
  {path:'',component: HomeComponent},
  {path:'trong-nuoc',component:DomesticComponent},
  {path:'thoi-su-quoc-te',component:ForeignComponent},
  // {path:'search/:searchTerm',component:ListNewsSearchComponent},
  // {path:'detail/:link',component:NewsDetailComponent},
  {path:'suc-khoe', component:HealthComponent},
  {path:'giao-duc', component:EducationComponent},
  {path:'phap-luat', component:LawyerComponent},
  {path:'nghe-thuat', component:ArtComponent},
  {path: 'dang-ky', component:RegisterComponent},
  {path: 'dang-nhap', component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
