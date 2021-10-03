import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import { Product } from "../../models/Product";
import { CartService } from "../../services/cart.service";
import { ProductsService } from "../../services/products.service"; 
import { NavigationComponent } from "../../navigation/navigation.component"

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product: Product = new Product();
  quantity: number = 1;
  isAdmin: boolean | undefined = false;


  constructor(private cart: CartService, private products: ProductsService, private nav: NavigationComponent) { }

  ngOnInit(): void {
   
  }


  addToCart(): void {
    this.cart.add(this.product, this.quantity);
    this.nav.animation()
    
  }

  setQuantity(e: Event): void {
    this.quantity = parseInt( (e.target as HTMLSelectElement).value );
  }

  deleteProduct(): void {
    this.products.deleteProduct(this.product);
  }

}
