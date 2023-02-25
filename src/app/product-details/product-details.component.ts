import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product, products } from '../products';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product: Product | undefined;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) { }
  // ActivatedRoute è specifica per ogni componente che il Router di Angular carica; contiene informazioni sul route e i suoi parametri. Iniettando ActivatedRoute nel costruttore, si configura il componente per usare un servizio

  ngOnInit(): void {
    // Estrarre l'id del prodotto dai parametri della route corrente:
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number (routeParams.get('productId'));

    // Trovare il prodotto che corrisponde all'id fornito dal route (Angular usa il productId per mostrare i dettagli di ogni prodotto)
    this.product = products.find(product => product.id === productIdFromRoute);
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!')
  }
  // il metodo addToCart() prende il prodotto selezionato come argomento, lo aggiunge al carrello tramite il servizio CartService e mostra la finestra di messaggio

}
