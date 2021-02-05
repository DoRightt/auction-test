import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'auction-product-page',
    templateUrl: './product-detail.component.html',
    styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

    productTitle: string;

    constructor(private route: ActivatedRoute) {
        this.productTitle = route.snapshot.params['prodTitle'];
    }

    ngOnInit(): void {
    }

}
