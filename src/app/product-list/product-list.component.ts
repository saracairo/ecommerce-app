import { Component } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;

  share() {
    window.alert('The product has been shared!');
  }

  // metodo di questo parent che verrà chiamato dall'evento del child
  onNotify() {
    window.alert("You will be notified when the product goes on sale");
  }
}
