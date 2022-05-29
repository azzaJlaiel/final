import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatecapteurComponent } from './updatecapteur.component';

describe('UpdatecapteurComponent', () => {
  let component: UpdatecapteurComponent;
  let fixture: ComponentFixture<UpdatecapteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatecapteurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatecapteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
