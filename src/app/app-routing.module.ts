import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {DomesticComponent} from "./domestic/domestic.component";
import {TechnologyComponent} from "./technology/technology.component";
import {SportsComponent} from "./sports/sports.component";
import {GreentourismComponent} from "./greentourism/greentourism.component";
import {WomenComponent} from "./women/women.component";
import {RealestateComponent} from "./realestate/realestate.component";
import {IdealsoflifeComponent} from "./idealsoflife/idealsoflife.component";
import {MarketComponent} from "./market/market.component";
import {StraighttalkComponent} from "./straighttalk/straighttalk.component";
import {ExclusivenewsComponent} from "./exclusivenews/exclusivenews.component";

const routes: Routes = [
  {path:'',component: HomeComponent},
  {path:'trong-nuoc',component:DomesticComponent},
  {path: 'cong-nghe',component:TechnologyComponent},
  {path: 'the-thao',component:SportsComponent},
  {path: 'du-lich-xanh', component:GreentourismComponent},
  {path: 'phu-nu', component:WomenComponent},
  {path: 'dia-oc', component:RealestateComponent},
  {path: 'ly-tuong-song', component:IdealsoflifeComponent},
  {path: 'thi-truong', component:MarketComponent},
  {path: 'noi-thang', component:StraighttalkComponent},
  {path: 'tin-doc-quyen', component:ExclusivenewsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
