import { Component, OnInit } from '@angular/core';
import { CityService } from '../shared/services/city.service';
import { AppService } from '../app.service';
import { CityDropDownComponent } from '../shared/widgets/city-drop-down/city-drop-down.component';
import { Router } from '@angular/router';
import { routes } from '../shared/constants/defines';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(public cityService: CityService,
    private appService: AppService,
    private router: Router) {

  }

  ngOnInit(): void {
    this.appService.showLoader = true;
    this.cityService.getCities().subscribe(_ => {
      this.appService.showLoader = false;
    });

  }

  select(id) {
    this.router.navigate([routes.city, id]);
  }

  addCity() {
    this.appService.modalSubject.next(CityDropDownComponent);
  }

  deleteCity(id) {
    this.cityService.removeCity(id);
  }
}
