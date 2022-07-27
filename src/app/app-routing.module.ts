import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {DomesticComponent} from "./domestic/domestic.component";
import {ForeignComponent} from "./foreign/foreign.component";

const routes: Routes = [
  {path:'',component: HomeComponent},
  {path:'trong-nuoc',component:DomesticComponent},
  {path:'thoi-su-quoc-te',component:ForeignComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
