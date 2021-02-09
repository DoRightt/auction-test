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

    newComment: string;
    newRating: number;
    isReviewHidden: boolean = true;

    constructor(
        private route: ActivatedRoute,
        private productService: ProductService
    ) {
        const prodId: number = parseInt(route.snapshot.params['prodId']);
        this.product = productService.getProductById(prodId);
        this.reviews = productService.getReviewsForProduct(this.product.id);
    }

    addReview() {
        let review = new Review(0, this.product.id, new Date(), 'Anonymous', this.newRating, this.newComment);
        console.log("Adding review " + JSON.stringify(review));
        this.reviews = [...this.reviews, review];
        this.product.rating = this.averageRating(this.reviews);
        this.resetForm();
    }

    averageRating(reviews: Review[]) {
        let sum = reviews.reduce((average, review) => average + review.rating, 0);
        return sum / reviews.length;
    }

    resetForm() {
        this.newRating = 0;
        this.newComment = '';
        this.isReviewHidden = true;
    }

    ngOnInit(): void {
    }

}
