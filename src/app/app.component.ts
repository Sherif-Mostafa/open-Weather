import { Component } from '@angular/core';
import { CityService } from './shared/services/city.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'OpenWeather';
  constructor(private cityService: CityService) {
    this.cityService.getCityData('2643743').subscribe(res =>{
      debugger;
    });
  }
}
