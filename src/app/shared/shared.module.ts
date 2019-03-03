import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CityCardComponent } from './components/city-card/city-card.component';
import { ModalModule } from 'ngx-bootstrap';
import { ModalComponent } from './components/modal/modal.component';
import { DynamicContentDirective } from './directives/dynamic-content.directive';
import { CityDropDownComponent } from './widgets/city-drop-down/city-drop-down.component';

const COMPONENTS = [
  CityCardComponent,
  ModalComponent
]

const WIDGETS = [
  CityDropDownComponent
]

const DIRECTIVES = [
  DynamicContentDirective
]
@NgModule({
  declarations: [...COMPONENTS, ...DIRECTIVES, ...WIDGETS],
  providers: [],
  exports: [...COMPONENTS, ...DIRECTIVES, ModalModule, ...WIDGETS],
  imports: [
    HttpClientModule,
    ModalModule.forRoot(),
    CommonModule
  ]
})
export class SharedModule { }
