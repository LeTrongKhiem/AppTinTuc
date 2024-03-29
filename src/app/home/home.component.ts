import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NewsApiService} from "../Service/news-api.service";
import {faCloud} from '@fortawesome/free-solid-svg-icons'
import {faSun} from '@fortawesome/free-solid-svg-icons'
import {faMoon} from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', '../app.component.css']
})
export class HomeComponent implements OnInit {
  faCloud = faCloud;
  faSun = faSun;
  faMoon = faMoon;
  constructor(private service: NewsApiService) {

  }
  WeatherData:any;
  temp: any;
  latestNewsResult: any = []
  noiThangResult: any = []
  docQuyenResult: any = []
  weatherResult: any = [];
  thoiSuResult: any = [];
  thoiSuQuocTeResult: any = [];
  congDoanResult: any = [];
  banDocReuslt: any = [];
  kinhTeReuslt: any = [];
  sucKhoeReuslt: any = [];
  giaoDucReuslt: any = [];
  phapLuatReuslt: any = [];
  giaiTriReuslt: any = [];
  congNgheReuslt: any = [];
  duLichXanhReuslt: any = [];
  phuNuReuslt: any = [];
  thiTruongReuslt: any = [];
  data:any =[];

  todayString: string = new Date().toLocaleDateString('vi');


  ngOnInit(): void {

    this.service.latestNews().subscribe((result) => {
      // console.log(result)
      this.latestNewsResult = result.items;
    })
    this.service.noiThang().subscribe((result) => {
      // console.log(result);
      this.noiThangResult = result.items;
    })
    this.service.docQuyen().subscribe((result) => {
      // console.log(result);
      this.docQuyenResult = result.items;
    })
    this.service.thoiSu().subscribe((result) => {
      console.log(result);
      this.thoiSuResult = result.items;
    })
    this.service.thoiSuQuocte().subscribe((result) => {
      // console.log(result);
      this.thoiSuQuocTeResult = result.items;
    })
    this.service.weatherApi().subscribe((result) => {
      this.weatherResult = result;
      this.temp = Math.floor(this.weatherResult.main.temp - 273.15);
    })
    this.service.congDoanApi().subscribe((result) => {
      this.congDoanResult = result.items;
    })
    this.service.banDocApi().subscribe((result) => {
      this.banDocReuslt = result.items;
    })
    this.service.kinhTeApi().subscribe((result) => {
      this.kinhTeReuslt = result.items;
    })
    this.service.sucKhoeApi().subscribe((result) => {
      this.sucKhoeReuslt = result.items;
    })
    this.service.giaoDucApi().subscribe((result) => {
      this.giaoDucReuslt = result.items;
    })
    this.service.phapluatApi().subscribe((result) => {
      this.phapLuatReuslt = result.items;
    })
    this.service.giaiTriApi().subscribe((result) => {
      this.giaiTriReuslt = result.items;
    })
    this.service.congNgheApi().subscribe((result) => {
      this.congNgheReuslt = result.items;
    })
    this.service.duLichXanhApi().subscribe((result) => {
      this.duLichXanhReuslt = result.items;
    })
    this.service.phuNuApi().subscribe((result) => {
      this.phuNuReuslt = result.items;
    })
    this.service.thiTruongtApi().subscribe((result) => {
      this.thiTruongReuslt = result.items;
    })

    this.WeatherData = {
      main : {},
      isDay: true
    };
    this.getWeatherData();
    console.log(this.WeatherData);
  }
  getWeatherData(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q=ho chi minh&appid=09f1c2260cdee53ceaf045da1d0853d5')
      .then(response=>response.json())
      .then(data=>{this.setWeatherData(data);})
  }
  setWeatherData(data: any){
    this.WeatherData = data;
    let sunsetTime = new Date(this.WeatherData.sys.sunset * 1000);
    this.WeatherData.sunset_time = sunsetTime.toLocaleTimeString();
    let currentDate = new Date();
    this.WeatherData.isDay = (currentDate.getTime() < sunsetTime.getTime());
    this.WeatherData.temp_celcius = (this.WeatherData.main.temp - 273.15).toFixed(0);
    this.WeatherData.temp_min = (this.WeatherData.main.temp_min - 273.15).toFixed(0);
    this.WeatherData.temp_max = (this.WeatherData.main.temp_max - 273.15).toFixed(0);
    this.WeatherData.temp_feels_like = (this.WeatherData.main.feels_like - 273.15).toFixed(0);
  }
  replaceAll(str: string, search: string, replacement: string) {
    return str.replace(new RegExp(search, 'g'), replacement);
  }


}
