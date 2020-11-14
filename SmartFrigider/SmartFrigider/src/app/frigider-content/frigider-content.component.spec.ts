import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrigiderContentComponent } from './frigider-content.component';

describe('FrigiderContentComponent', () => {
  let component: FrigiderContentComponent;
  let fixture: ComponentFixture<FrigiderContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrigiderContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrigiderContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
