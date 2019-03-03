import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CityDropDownComponent } from './city-drop-down.component';
import { TranslateModule } from '@ngx-translate/core';
import { CityService } from '../../services/city.service';
import { CityServiceMock } from 'src/app/mock/service/city-service.mock';

describe('CityDropDownComponent', () => {
  let component: CityDropDownComponent;
  let fixture: ComponentFixture<CityDropDownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot()],
      declarations: [CityDropDownComponent],
      providers: [{ provide: CityService, useClass: CityServiceMock }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CityDropDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
