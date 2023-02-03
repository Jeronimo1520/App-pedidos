import { Component, OnInit } from '@angular/core';
import { CanastaService } from 'src/app/services/canasta.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  canastaCantidad = 0
  constructor(canastaService:CanastaService) {
    canastaService.getCanastaObservable().subscribe((nuevaCanasta) =>{
      this.canastaCantidad = nuevaCanasta.itemsTotal;
    })
   }

  ngOnInit(): void {
  }

}
