import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CityService } from './services/city.service';
import { HttpClientModule } from '@angular/common/http';

const SERVICES = [
  CityService
]

@NgModule({
  declarations: [],
  providers: [...SERVICES],
  imports: [
    HttpClientModule,
    CommonModule
  ]
})
export class SharedModule { }
