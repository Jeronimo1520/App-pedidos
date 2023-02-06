import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoPagoPageComponent } from './info-pago-page.component';

describe('InfoPagoPageComponent', () => {
  let component: InfoPagoPageComponent;
  let fixture: ComponentFixture<InfoPagoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoPagoPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoPagoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
