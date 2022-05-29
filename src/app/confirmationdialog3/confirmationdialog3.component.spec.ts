import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Confirmationdialog3Component } from './confirmationdialog3.component';

describe('Confirmationdialog3Component', () => {
  let component: Confirmationdialog3Component;
  let fixture: ComponentFixture<Confirmationdialog3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Confirmationdialog3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Confirmationdialog3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
