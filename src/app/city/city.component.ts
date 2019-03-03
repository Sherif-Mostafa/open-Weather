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

  /** id of the current city that will be displayed */
  cityId: string;
  /** Current city */
  city: City;
  /** chat data will display the forecast of the current city */
  chart: Chart;

  constructor(public cityService: CityService, private router: Router, private activeRoute: ActivatedRoute, private appService: AppService) { }

  ngOnInit() {
    this.activeRoute.params.subscribe(params => {
      this.cityId = params.id;
      this.cityService.getCityForecast(this.cityId).subscribe(res => {
        this.city = this.cityService.defaultCities.find(item => item.id == this.cityId);
        this.city.forecasts = (res as City).forecasts;
        this.displayChart();
        this.appService.showLoader = false;
      }, error => {
        this.appService.showLoader = false;
        this.router.navigate([routes.home]);
      });
    })
  }

  /** Map time to hours
   * @param time as string to be mapped
   * @example 2019-03-04 21:00:00 to be 9 pm
   */
  mapTimeToHours(time: string) {
    let date = new Date(time);
    return date.getHours() - 12 > 0 ? date.getHours() - 12 + 'pm' : date.getHours() + 'am';

  }

  /** display the chart of the current city forecast */
  displayChart() {
    let chartData = [];
    let chartAxisData = [];

    for (let index = 0; index < 9 && index < this.city.forecasts.length; index++) {
      let data = {
        y: this.city.forecasts[index].mainFeature.temp,
        marker: {
          symbol: 'url(http://openweathermap.org/img/w/' + this.city.forecasts[index].weather[0].icon + '.png)'
        }
      }

      let result = this.mapTimeToHours(this.city.forecasts[index].dct);
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
