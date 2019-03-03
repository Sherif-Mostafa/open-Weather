import { Component, OnInit, Input } from '@angular/core';
import { CityService } from '../../services/city.service';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-city-drop-down',
  templateUrl: './city-drop-down.component.html',
  styleUrls: ['./city-drop-down.component.scss']
})
export class CityDropDownComponent implements OnInit {
  selectedId: string;
  constructor(public cityService: CityService, private appService: AppService) { }

  ngOnInit() {
  }
  selectedCity(cityId) {
    this.selectedId = cityId;
  }
  addCity() {
    if (this.selectedId) {
      this.cityService.addNewCity(this.selectedId);
    }
    this.appService.hideModal.next();
  }
}
