import { Component, OnInit } from '@angular/core';
import { CityService } from '../shared/services/city.service';
import { ActivatedRoute, Router } from '@angular/router';
import { routes } from '../shared/constants/defines';
import { City } from '../shared/models/city';
import { Chart } from 'angular-highcharts';
import { AppService } from '../app.service';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss']
})
export class CityComponent implements OnInit {

  cityId: string;
  city: City;
  chart: Chart;

  constructor(public cityService: CityService, private router: Router, private activeRoute: ActivatedRoute, private appService: AppService) { }

  ngOnInit() {
    this.activeRoute.params.subscribe(params => {
      this.cityId = params.id;
      this.cityService.getCityForecast(this.cityId).subscribe(res => {
        this.city = this.cityService.defaultCities.find(item => item.id == this.cityId);
        this.city.forecasts = (res as City).forecasts;
        this.init();
        this.appService.showLoader = false;
      }, error => {
        this.appService.showLoader = false;
        this.router.navigate([routes.home]);
      });
    })
  }

  init() {
    let chartData = [];
    let chartAxisData = [];

    for (let index = 0; index < 9; index++) {
      let data = {
        y: this.city.forecasts[index].mainFeature.temp,
        marker: {
          symbol: 'url(http://openweathermap.org/img/w/' + this.city.forecasts[index].weather[0].icon + '.png)'
        }
      }
      let date = new Date(this.city.forecasts[index].dct);
      let result = date.getHours() - 12 > 0 ? date.getHours() - 12 + 'pm' : date.getHours() + 'am';
      chartAxisData.push(result);
      chartData.push(data);

    }
    this.city.forecasts.map(item => {
    })
    let chart = new Chart({
      chart: {
        type: 'spline'
      },
      title: {
        text: 'Forecast'
      },
      xAxis: {
        categories: [...chartAxisData]
      },
      tooltip: {
        crosshairs: true,
        shared: true
      },
      credits: {
        enabled: false
      },
      responsive: {
        rules: [{
          condition: {
            maxWidth: 500
          },
          // Make the labels less space demanding on mobile
          chartOptions: {
            xAxis: {
              labels: {
                formatter: function () {
                  return this.value.charAt(0);
                }
              }
            },
            yAxis: {
              labels: {
                align: 'left',
                x: 0,
                y: -2
              },
              title: {
                text: ''
              }
            }
          }
        }]
      },
      series: [{
        type: "spline",
        name: this.city.name,
        data: [...chartData]
      }]
    });
    this.chart = chart;
  }


}
