import { Component, OnInit } from '@angular/core';
import { CartService } from "../services/cart.service";
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})

@Injectable({
  providedIn: 'root'
})
export class NavigationComponent implements OnInit {
  cartCount: number = 0;


  constructor(private cart: CartService) { }

  ngOnInit(): void {
    this.cart.count.subscribe(count => this.cartCount = count);

  }

  makeActive(): void {
    document.getElementById("cart")!.classList.add("active");
  }

  makeUnactive(): void {
    document.getElementById("cart")!.classList.remove("active");
  }

  animation(): void {
    document.getElementById("cart")!.classList.add("animation");
    
    setTimeout(()=>{
    document.getElementById("cart")!.classList.remove("animation");
    },500)
  }
}
