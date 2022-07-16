import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
// Interface
import { Product } from 'src/app/interfaces/products';
// Services
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {

  items: Product[] = this.cartService.getItems();
  total: number = 0;
  checkoutForm = this.formBuilder.group({
    name: '',
    address: '',
  })

  constructor(
    private cartService: CartService, 
    private formBuilder: FormBuilder
  ) { }
  
  ngOnInit(): void {
    console.log(this.items);

    this.items.forEach(element => {
      this.total = this.total + element.price
    });
  }

  onSubmit(): void {
    this.items = this.cartService.clearCart();
    console.warn('Your order has been submitted', this.checkoutForm.value);
    window.alert(`${this.checkoutForm.value.name}, your order has been submitted.\nThanks`);
    this.checkoutForm.reset;
  }

}
