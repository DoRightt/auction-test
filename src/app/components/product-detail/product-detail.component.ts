import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import Product from "../../models/product";
import {ProductService} from "../../services/product.service";
import {Review} from "../../models/review";

@Component({
    selector: 'auction-product-page',
    templateUrl: './product-detail.component.html',
    styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
    product: Product;
    reviews: Review[];

    constructor(
        private route: ActivatedRoute,
        private productService: ProductService
    ) {
        const prodId: number = parseInt(route.snapshot.params['prodId']);
        this.product = productService.getProductById(prodId);
        this.reviews = productService.getReviewsForProduct(this.product.id);
    }

    ngOnInit(): void {
    }

}
