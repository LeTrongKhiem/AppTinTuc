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
import {ListNewsSearchComponent} from "./list-news-search/list-news-search.component";
import {NewsDetailComponent} from "./news-detail/news-detail.component";
import {TechnologyComponent} from "./technology/technology.component";
import {SportsComponent} from "./sports/sports.component";
import {GreentourismComponent} from "./greentourism/greentourism.component";
import {WomenComponent} from "./women/women.component";
import {RealestateComponent} from "./realestate/realestate.component";
import {IdealsoflifeComponent} from "./idealsoflife/idealsoflife.component";
import {MarketComponent} from "./market/market.component";
import {StraighttalkComponent} from "./straighttalk/straighttalk.component";
import {ExclusivenewsComponent} from "./exclusivenews/exclusivenews.component";
import {UnionComponent} from "./union/union.component";
import {YouReadComponent} from "./you-read/you-read.component";

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
  {path:'giai-tri', component:EntertainmentComponent},
  {path: 'dang-ky', component:RegisterComponent},
  {path: 'dang-nhap', component:LoginComponent},
  {path:'search/:searchTerm',component:ListNewsSearchComponent},
  {path:'detail/:link',component:NewsDetailComponent},
  {path: 'cong-nghe',component:TechnologyComponent},
  {path: 'the-thao',component:SportsComponent},
  {path: 'du-lich-xanh', component:GreentourismComponent},
  {path: 'phu-nu', component:WomenComponent},
  {path: 'dia-oc', component:RealestateComponent},
  {path: 'ly-tuong-song', component:IdealsoflifeComponent},
  {path: 'thi-truong', component:MarketComponent},
  {path: 'noi-thang', component:StraighttalkComponent},
  {path: 'tin-doc-quyen', component:ExclusivenewsComponent},
  {path:'cong-doan',component:UnionComponent},
  {path:'ban-doc',component:YouReadComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
