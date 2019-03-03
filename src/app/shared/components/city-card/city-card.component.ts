import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-city-card',
  templateUrl: './city-card.component.html',
  styleUrls: ['./city-card.component.scss']
})
export class CityCardComponent implements OnInit {

  @Input() title: string;
  @Input() cityCode: string;
  @Input() temp: string;
  @Input() tempMax: string;
  @Input() tempMin: string;
  @Input() country: string;
  @Input() flag: string;
  @Input() weatherIcon: string;

  @Output() selectedCard = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  selected(cityCode) {
    this.selectedCard.emit(cityCode);
  }
}
