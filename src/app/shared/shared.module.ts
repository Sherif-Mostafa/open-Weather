import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CityCardComponent } from './components/city-card/city-card.component';

const SERVICES = [
]

const COMPONENTS = [
  CityCardComponent
]
@NgModule({
  declarations: [...COMPONENTS],
  providers: [...SERVICES],
  exports: [...COMPONENTS],
  imports: [
    HttpClientModule,
    CommonModule
  ]
})
export class SharedModule { }
