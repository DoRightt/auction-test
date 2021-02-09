import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
    selector: 'auction-stars',
    templateUrl: './stars.component.html',
    styleUrls: ['./stars.component.scss']
})
export class StarsComponent implements OnInit {
    private _rating!: number;
    private maxStars: number = 5;
    stars!: boolean[];
    @Input() readonly: boolean = true;
    @Input() get rating(): number {
        return this._rating;
    };

    set rating(value: number) {
        this._rating = value || 0;
        this.stars = Array(this.maxStars).fill(true, 0, this.rating);
    }

    @Output() ratingChange: EventEmitter<number> = new EventEmitter<number>();

    constructor() {
    }

    fillStarsWithColor(index: number) {
        if (!this.readonly) {
            this.rating = index + 1;
            this.ratingChange.emit(this.rating);
        }
    }

    ngOnInit(): void {
        for (let i = 0; i < this.maxStars; i++) {
            this.stars.push(i > this.rating)
        }
    }
}
