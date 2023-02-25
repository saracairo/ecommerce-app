import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Product } from '../products';

@Component({
  selector: 'app-product-alerts', // identifica il componente; tag che verrà passato in html agli altri componenti
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent {
  // la classe gestisce le funzionalità del componente

  // definizione di una proprietà "product" con decoratore @Input(); @Input() indica che il valore della proprietà passa dal componente parent, ProductListComponent
  @Input() product!: Product;

  // definizione di una proprietà "notify" con decoratore @Output() che permette a ProductAlertComponent di emettere un evento quando il valore di "notify" cambia.
  @Output() notify = new EventEmitter();

}
