import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CityDropDownComponent } from './city-drop-down.component';

describe('CityDropDownComponent', () => {
  let component: CityDropDownComponent;
  let fixture: ComponentFixture<CityDropDownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CityDropDownComponent ]
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
