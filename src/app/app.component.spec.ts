import { TestBed, async, inject, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { AppService } from './app.service';
import { AppServiceMock } from './mock/service/app-service.mock';
import { CityDropDownComponent } from './shared/widgets/city-drop-down/city-drop-down.component';
import { ModalComponent } from './shared/components/modal/modal.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        TranslateModule.forRoot()
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
      providers: [{ provide: AppService, useClass: AppServiceMock }],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.debugElement.componentInstance;
    fixture.detectChanges();
  })

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it('should show modal', inject([AppService], (appService) => {
    app.ngOnInit();
    app.modal = new ModalComponent(null, null, null);
    fixture.detectChanges();
    spyOn(app.modal, 'showModal');
    app.appService.modalSubject.next(CityDropDownComponent);
    fixture.detectChanges();
    expect(app.modal.title).toBeDefined();
    expect(app.modal.showModal).toHaveBeenCalled();
  }));

  it('should hide modal', inject([AppService], (appService) => {
    app.ngOnInit();
    app.modal = new ModalComponent(null, null, null);
    spyOn(app.modal, 'hideModal');
    app.appService.hideModal.next(CityDropDownComponent);
    fixture.detectChanges();
    expect(app.modal.hideModal).toHaveBeenCalled();
  }));
});
