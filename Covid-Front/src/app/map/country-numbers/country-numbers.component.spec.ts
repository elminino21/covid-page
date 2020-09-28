import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryNumbersComponent } from './country-numbers.component';

describe('CountryNumbersComponent', () => {
  let component: CountryNumbersComponent;
  let fixture: ComponentFixture<CountryNumbersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountryNumbersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryNumbersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
