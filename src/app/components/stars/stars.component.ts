import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'auction-stars',
    templateUrl: './stars.component.html',
    styleUrls: ['./stars.component.scss']
})
export class StarsComponent implements OnInit {
    @Input() rating: number = 0;
    @Input() count: number = 5;

    stars: boolean[] = [];

    constructor() {
    }

    ngOnInit(): void {
        for (let i = 0; i < this.count; i++) {
            this.stars.push(i > this.rating)
        }
    }
}
