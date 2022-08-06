import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {DomesticComponent} from "./domestic/domestic.component";
import {ForeignComponent} from "./foreign/foreign.component";
import {ListNewsSearchComponent} from "./list-news-search/list-news-search.component";
import {NewsDetailComponent} from "./news-detail/news-detail.component";
import {UnionComponent} from "./union/union.component";

const routes: Routes = [
  {path:'',component: HomeComponent},
  {path:'trong-nuoc',component:DomesticComponent},
  {path:'thoi-su-quoc-te',component:ForeignComponent},
  {path:'search/:searchTerm',component:ListNewsSearchComponent},
  {path:'detail/:link',component:NewsDetailComponent},
  {path:'cong-doan',component:UnionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
