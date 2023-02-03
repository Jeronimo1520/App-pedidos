import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanastaPageComponent } from './canasta-page.component';

describe('CanastaPageComponent', () => {
  let component: CanastaPageComponent;
  let fixture: ComponentFixture<CanastaPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CanastaPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CanastaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
