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

  title = 'OpenWeather';
  @ViewChild('modal') modal: ModalComponent;

  constructor(public appService: AppService, private translate: TranslateService) {

  }

  ngOnInit(): void {
    this.appService.modalSubject.subscribe(component => {
      if (component == CityDropDownComponent) {
        this.modal.title = this.translate.instant('common.addCity.title');
        this.modal.showModal(component);
      }
    })
    this.appService.hideModal.subscribe(_ => {
      this.modal.hideModal();
    })
  }
}
