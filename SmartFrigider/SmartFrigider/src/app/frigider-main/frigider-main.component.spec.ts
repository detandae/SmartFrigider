import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrigiderMainComponent } from './frigider-main.component';

describe('FrigiderMainComponent', () => {
  let component: FrigiderMainComponent;
  let fixture: ComponentFixture<FrigiderMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrigiderMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrigiderMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
