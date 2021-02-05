import { Component, OnInit } from '@angular/core';
import Product from "../../models/product";
import {ProductService} from "../../services/product.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    products: Product[] = [];

    constructor(private productService: ProductService) {
        this.products = this.productService.getProducts();
    }

  ngOnInit(): void {
  }

}