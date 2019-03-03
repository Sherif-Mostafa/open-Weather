import { Component, OnInit, ViewChild } from '@angular/core';
import { AppService } from './app.service';
import { ModalComponent } from './shared/components/modal/modal.component';
import { CityDropDownComponent } from './shared/widgets/city-drop-down/city-drop-down.component';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  /** title of the app */
  title = this.translate.instant('common.appTitle');;
  /** Reference to the custom component modal  */
  @ViewChild('modal') modal: ModalComponent;

  constructor(public appService: AppService, private translate: TranslateService) {
  }

  /** angular hook to run on init of the component
   * handle the modal dynamic component render once the the modal SUbject fires (next)
   * and handle the modal close 
   */
  ngOnInit(): void {
    this.appService.modalSubject.subscribe(component => {
      // if the component that will be rendered is city drop down set addCity title to the modal
      if (component == CityDropDownComponent) {
        this.modal.title = this.translate.instant('common.addCity.title');
      }
      this.modal.showModal(component);
    })
    this.appService.hideModal.subscribe(_ => {
      this.modal.hideModal();
    })
  }
}
