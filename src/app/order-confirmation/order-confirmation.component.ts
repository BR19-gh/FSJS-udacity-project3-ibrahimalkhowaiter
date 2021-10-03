import { Component, OnInit } from '@angular/core';
import { CartService } from "../services/cart.service";
import { Order } from "../models/Order";
import { Router } from '@angular/router';


@Component({
  selector: 'app-order-confirmation',
  templateUrl: './order-confirmation.component.html',
  styleUrls: ['./order-confirmation.component.css']
})
export class OrderConfirmationComponent implements OnInit {
  order: Order = new Order();;
  total: number = 0;

  constructor(private cart: CartService, private router: Router) { }

  ngOnInit(): void {
    this.order = this.cart.getOrder();
    this.total = this.cart.getTotalFromOrder(this.order);
  }

  redirectToHome(): void{
    this.router.navigateByUrl("/");
    setTimeout(() => {
      window.location.reload();
    }, 5);
  }

}
