import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  modalSubject: Subject<any> = new Subject<any>();
  hideModal: Subject<any> = new Subject<any>();
  showLoader: boolean = false;
  constructor() { }
}
