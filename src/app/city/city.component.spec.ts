import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { CityComponent } from './city.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { AppService } from '../app.service';
import { AppServiceMock } from '../mock/service/app-service.mock';
import { TranslateModule } from '@ngx-translate/core';
import { CityService } from '../shared/services/city.service';
import { CityServiceMock } from '../mock/service/city-service.mock';
import { Router, ActivatedRoute } from '@angular/router';
import { RouterServiceMock } from '../mock/service/router-service.mock';
import { ActivatedRouteServiceMock } from '../mock/service/activatedroute-service.mock';
import { City } from '../shared/models/city';

describe('CityComponent', () => {
  let component: CityComponent;
  let fixture: ComponentFixture<CityComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot()
      ],
      declarations: [CityComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        { provide: AppService, useClass: AppServiceMock },
        { provide: CityService, useClass: CityServiceMock },
        { provide: Router, useClass: RouterServiceMock },
        { provide: ActivatedRoute, useClass: ActivatedRouteServiceMock }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CityComponent);
    component = fixture.componentInstance;
    component.city = new City();
    component.city.forecasts = [
      {
        clouds: '',
        dct: '',
        mainFeature: {
          grnd_level: '',
          humidity: '',
          pressure: '',
          sea_level: '',
          temp: '',
          tempMax: '',
          tempMin: '',
          temp_kf: ''
        },
        rain: { one_hour: '', three_hours: '' },
        snow: { one_hour: '', three_hours: '' },
        weather: [{
          description: '',
          icon: '',
          id: '',
          main: ''
        }],
        wind: { deg: '', speed: '' }
  
      }];
  
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return correct time', () => {
    spyOn(component, 'mapTimeToHours').and.callThrough();
    let result = component.mapTimeToHours('2019-03-04 21:00:00');
    expect(result).toEqual('9pm');
  });

  it('should fill chart with data', () => {
    spyOn(component, 'displayChart').and.callThrough();
    component.displayChart();
    expect(component.chart).toBeDefined();
  });

  it('should fill chart with data', inject([CityService], (cityService) => {
    spyOn(cityService, 'getCityForecast').and.callThrough();
    spyOn(component, 'displayChart').and.callThrough();

    component.ngOnInit();
    expect(cityService.getCityForecast).toHaveBeenCalled();
    expect(component.displayChart).toHaveBeenCalled();
  }));
});
