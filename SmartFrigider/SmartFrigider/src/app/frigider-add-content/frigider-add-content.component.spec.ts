import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrigiderAddContentComponent } from './frigider-add-content.component';

describe('FrigiderAddContentComponent', () => {
  let component: FrigiderAddContentComponent;
  let fixture: ComponentFixture<FrigiderAddContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrigiderAddContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrigiderAddContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
