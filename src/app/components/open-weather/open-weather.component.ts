import { WeatherService } from './../../services/weather-service.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'open-weather',
  templateUrl: './open-weather.component.html',
  styleUrls: ['./open-weather.component.css']
})
export class OpenWeatherComponent extends WeatherService implements OnInit {

  weatherDetails : {};
  lat : any;
  long : any;

  constructor(http: HttpClient) {
    super(http);
  }

  ngOnInit() {
    this.subscribeCurrentPosition();
  }

  subscribeCurrentPosition() {
    if (window.navigator.geolocation) {
      window.navigator.geolocation.watchPosition(
        (position) => {
          this.lat = position.coords.latitude;
          this.long = position.coords.longitude;
          this.getWeather(this.lat, this.long).subscribe( res => {
            this.weatherDetails = res;
          });
        }, (error) => {
          alert("service error");
        });
      } else {
        
      }
  }

}
