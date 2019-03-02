import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

const SERVICES = [
  
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
