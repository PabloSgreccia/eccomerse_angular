import { Component, EventEmitter, Input, OnInit, Output,  } from '@angular/core';
import { Product } from 'src/app/interfaces/products';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})

export class ProductAlertsComponent implements OnInit {

  // Recibir data de un elemento padre
  @Input() product: Product | undefined;
  // Enviar data a un elemento padre
  @Output() notify = new EventEmitter();

  constructor() { 
  }
  
  ngOnInit(): void {
    // console.log(EventEmitter);
  }

}
