import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  items = this.cartService.getItems();
  // la proprietà items usa il metodo getItems() del service iniettato nel costruttore di questo componente per immagazzinare i prodotti nel carrello

  checkoutForm = this.formBuilder.group({
    name: '',
    address: ''
  });
  // il metodo group() setta la proprietà checkoutForm in modo che contenga name e address


  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
  ) { }

  // settaggio di metodo onSubmit() per processare i dati inseriti nel form; in più, clearCart() del CartService al suo interno si occuperà di resettre il form e ripulire il carrello:
  onSubmit(): void {
    this.items = this.cartService.clearCart();
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }

}
