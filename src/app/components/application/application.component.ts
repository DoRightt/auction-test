import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'auction-application',
    templateUrl: './application.component.html',
    styleUrls: ['./application.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class ApplicationComponent implements OnInit {

    constructor() {
    }

    ngOnInit(): void {
    }

}
