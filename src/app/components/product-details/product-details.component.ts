import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// Interfaces
import { Product, products } from 'src/app/interfaces/products';
// Services
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})

export class ProductDetailsComponent implements OnInit {

  product: Product | undefined;

  constructor(private route: ActivatedRoute, private cartService: CartService) { }

  ngOnInit(): void {
    // Get data from URLs params
    const routeParams = this.route.snapshot.paramMap;
    // console.log(this.route.snapshot.paramMap);
    const productIdFromRoute = Number(routeParams.get('productId'));
    
    // Filtering our target product 
    // console.log(this.product); // type: undefined
    this.product = products.find( product => product.id === productIdFromRoute);
    // console.log(this.product); // type: Product
  }

  addToCart(product: Product){
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }
  


}
