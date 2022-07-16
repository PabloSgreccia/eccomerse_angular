import { Component } from '@angular/core';
// Interfaces
import { Product, products } from 'src/app/interfaces/products';
// Services
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})

export class ProductListComponent {
  products = products;

  constructor(private cartService: CartService){}

  share(productName: string) {
    window.alert(`${productName} has been shared!`);
  }

  onNotify(productName: string){
    window.alert(`You will be notified when ${productName} goes on sale!`);
  }

  addToCart(product: Product){
    this.cartService.addToCart(product);
    // console.log('Your product has been added to the cart!');
    window.alert(`${product.name} has been added to the cart!`);
  }

}

