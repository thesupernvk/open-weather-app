import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  //ID 0d3043a3816880d0b0a632c0d1fc8962
  //API call: http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID={APIKEY}
  
  private URL_LOCATION = "http://api.openweathermap.org/data/2.5/weather";
  private URL_LOCATION_MOCK = "http://localhost:3000/payload";

  constructor(private http: HttpClient) { }

  getWeather(lat, long) {
    return this.http.get(this.URL_LOCATION,{
      params: {
        APPID: '0d3043a3816880d0b0a632c0d1fc8962',
        lat: lat,
        lon: long,
        units: 'metric'
      }
    })
  }

}
