import { Product } from '../products'; // Interfaccia Product importata dal file products.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CartService {
  // definizione di una proprietà items che immagazzinerà un array dei prodotti aggiunti nel carrello
  items: Product[] = [];

  // inject del servizio HttpClient così che l'app possa comunicare con API esterne
  constructor(private http: HttpClient) { }

  // definizione di metodi che serviranno ad aggiungere, mostrare e togliere prodotti nel carrello
  addToCart(product: Product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  // definizione funzione che userà il metodo get() di HttpClient
  getShippingPrices() {
    return this.http.get<{type: String, price: number}[]>('/assets/shipping.json');
  }
}
