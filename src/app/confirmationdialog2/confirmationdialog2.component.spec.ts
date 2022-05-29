import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Confirmationdialog2Component } from './confirmationdialog2.component';

describe('Confirmationdialog2Component', () => {
  let component: Confirmationdialog2Component;
  let fixture: ComponentFixture<Confirmationdialog2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Confirmationdialog2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Confirmationdialog2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
