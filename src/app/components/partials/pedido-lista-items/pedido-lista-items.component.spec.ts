import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidoListaItemsComponent } from './pedido-lista-items.component';

describe('PedidoListaItemsComponent', () => {
  let component: PedidoListaItemsComponent;
  let fixture: ComponentFixture<PedidoListaItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PedidoListaItemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PedidoListaItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
