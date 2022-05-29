import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QRCGeneratorComponent } from './qrc-generator.component';

describe('QRCGeneratorComponent', () => {
  let component: QRCGeneratorComponent;
  let fixture: ComponentFixture<QRCGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QRCGeneratorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QRCGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
