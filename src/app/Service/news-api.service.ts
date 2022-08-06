import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {

  constructor(private http: HttpClient) {
  }

  latestNewsApiUrl = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fnld.com.vn%2Ftin-moi-nhat.rss';
  noiThangApitUrl = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fnld.com.vn%2Fnoi-thang.rss'
  docQuyenApitUrl = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fnld.com.vn%2Ftin-doc-quyen.rss';
  thoiSuApiUrl = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fnld.com.vn%2Fthoi-su.rss';
  thoiSUQuocTeUrl = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fnld.com.vn%2Fthoi-su-quoc-te.rss';
  congDoanApiUrl = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fnld.com.vn%2Fcong-doan.rss'
  banDocApiUrl = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fnld.com.vn%2Fban-doc.rss';
  kinhTeApiUrl = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fnld.com.vn%2Fkinh-te.rss'
  sucKhoeApiUrl = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fnld.com.vn%2Fsuc-khoe.rss'
  giaoDucApiUrl ='https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fnld.com.vn%2Fgiao-duc-khoa-hoc.rss'
  weatherApiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=ho chi minh&appid=09f1c2260cdee53ceaf045da1d0853d5';
  phapluatApiUrl= 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fnld.com.vn%2Fphap-luat.rss'
  giaiTriApiUrl= 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fnld.com.vn%2Fgiai-tri.rss';
  congNgheApiUrl= 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fnld.com.vn%2Fcong-nghe.rss';
  duLichXanhApiUrl= 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fnld.com.vn%2Fdu-lich-xanh.rss';
  phuNuApiUrl= 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fnld.com.vn%2Fchuyen-trang-phu-nu.rss';
  thiTruongApiUrl= 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fnld.com.vn%2Fthi-truong.rss';


  latestNews(): Observable<any> {
    return this.http.get(this.latestNewsApiUrl);
  }

  noiThang(): Observable<any> {
    return this.http.get(this.noiThangApitUrl);
  }

  docQuyen(): Observable<any> {
    return this.http.get(this.docQuyenApitUrl);
  }

  thoiSu(): Observable<any> {
    return this.http.get(this.thoiSuApiUrl)
  }

  thoiSuQuocte(): Observable<any> {
    return this.http.get(this.thoiSUQuocTeUrl)
  }
  thoiSuQuocteCatelory(params:any): Observable<any> {
    return this.http.get(this.thoiSUQuocTeUrl,{params})
  }

  weatherApi(): Observable<any> {
    return this.http.get(this.weatherApiUrl);
  }

  congDoanApi(): Observable<any> {
    return this.http.get(this.congDoanApiUrl)
  }
  banDocApi(): Observable<any> {
    return this.http.get(this.banDocApiUrl)
  }
  kinhTeApi(): Observable<any> {
    return this.http.get(this.kinhTeApiUrl)
  }
  sucKhoeApi(): Observable<any> {
    return this.http.get(this.sucKhoeApiUrl)
  }
  giaoDucApi(): Observable<any> {
    return this.http.get(this.giaoDucApiUrl)
  }
  phapluatApi(): Observable<any> {
    return this.http.get(this.phapluatApiUrl)
  }
  giaiTriApi(): Observable<any> {
    return this.http.get(this.giaiTriApiUrl)
  }
  congNgheApi(): Observable<any> {
    return this.http.get(this.congNgheApiUrl)
  }
  duLichXanhApi(): Observable<any> {
    return this.http.get(this.duLichXanhApiUrl)
  }
  phuNuApi(): Observable<any> {
    return this.http.get(this.phuNuApiUrl)
  }
  thiTruongtApi(): Observable<any> {
    return this.http.get(this.thiTruongApiUrl)
  }



}
