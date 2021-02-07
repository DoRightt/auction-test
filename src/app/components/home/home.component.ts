import { Component, OnInit } from '@angular/core';
import Product from "../../models/product";
import {ProductService} from "../../services/product.service";
import {FormControl} from "@angular/forms";
import {debounceTime} from "rxjs/operators";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    products: Product[] = [];
    titleFilter: FormControl = new FormControl();
    filterCriteria: any;

    constructor(private productService: ProductService) {
        this.products = this.productService.getProducts();
        this.titleFilter.valueChanges
            .pipe(debounceTime(500))
            .subscribe(
                value => this.filterCriteria = value,
                error => console.error(error)
            )
    }

  ngOnInit(): void {
  }

}
