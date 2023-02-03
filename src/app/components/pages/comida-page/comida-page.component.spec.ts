import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComidaPageComponent } from './comida-page.component';

describe('ComidaPageComponent', () => {
  let component: ComidaPageComponent;
  let fixture: ComponentFixture<ComidaPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComidaPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComidaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
