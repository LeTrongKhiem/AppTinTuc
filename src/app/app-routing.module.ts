import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {DomesticComponent} from "./domestic/domestic.component";
import {ForeignComponent} from "./foreign/foreign.component";
// import {ListNewsSearchComponent} from "./list-news-search/list-news-search.component";
// import {NewsDetailComponent} from "./news-detail/news-detail.component";
import {HealthComponent} from "./health/health.component";
import {EducationComponent} from './education/education.component';
import {LawyerComponent} from './lawyer/lawyer.component';
import {ArtComponent} from './art/art.component';
import {EntertainmentComponent} from './entertainment/entertainment.component';
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
import {EconomyComponent} from "./economy/economy.component";

const routes: Routes = [
  {path: '', component: HomeComponent,data: { title: 'Trang chủ' }},
  {path: 'trong-nuoc', component: DomesticComponent,data: { title: 'Trong nước' }},
  {path: 'thoi-su-quoc-te', component: ForeignComponent,data: { title: 'Thời sự quốc tế' }},
  {path: 'suc-khoe', component: HealthComponent,data: { title: 'Sức khỏe' }},
  {path: 'giao-duc', component: EducationComponent,data: { title: 'Giáo dục' }},
  {path: 'phap-luat', component: LawyerComponent,data: { title: 'Pháp luật' }},
  {path: 'nghe-thuat', component: ArtComponent,data: { title: 'Nghệ thuật' }},
  {path: 'giai-tri', component: EntertainmentComponent,data: { title: 'Giải trí' }},
  {path: 'dang-ky', component: RegisterComponent,data: { title: 'Đăng ký' }},
  {path: 'dang-nhap', component: LoginComponent,data: { title: 'Đăng nhập' }},
  {path: 'search/:searchTerm', component: ListNewsSearchComponent,data: { title: 'Tìm kiếm' }},
  // {path: 'detail/:link', component: NewsDetailComponent},
  {path: 'cong-nghe', component: TechnologyComponent,data: { title: 'Công nghệ' }},
  {path: 'the-thao', component: SportsComponent,data: { title: 'Thể thao' }},
  {path: 'du-lich-xanh', component: GreentourismComponent,data: { title: 'Du lịch xanh' }},
  {path: 'phu-nu', component: WomenComponent,data: { title: 'Phụ nữ' }},
  {path: 'dia-oc', component: RealestateComponent,data: { title: 'Địa ốc' }},
  {path: 'ly-tuong-song', component: IdealsoflifeComponent,data: { title: 'Lý tưởng sống' }},
  {path: 'thi-truong', component: MarketComponent,data: { title: 'Thị trường' }},
  {path: 'noi-thang', component: StraighttalkComponent,data: { title: 'Nói thẳng' }},
  {path: 'tin-doc-quyen', component: ExclusivenewsComponent,data: { title: 'Tin độc quyền' }},
  {path: 'cong-doan', component: UnionComponent,data: { title: 'Công đoàn' }},
  {path: 'ban-doc', component: YouReadComponent,data: { title: 'Bạn đọc' }},
  {path: 'kinh-te', component: EconomyComponent,data: { title: 'Kinh tế' }},
  {
    path: 'detail/:detail',
    component: NewsDetailComponent,data: { title: 'Tin chi tiết' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
