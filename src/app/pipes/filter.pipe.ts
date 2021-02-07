import {Pipe, PipeTransform} from '@angular/core';
import {filter} from "rxjs/operators";

@Pipe({
    name: 'filter'
})
export class FilterPipe implements PipeTransform {

    transform(list: any[], filterByField: string, filterValue: string): any {

        if (!filterByField || !filterValue) {
            return list;
        }

        console.log(filterByField, filterValue, 'wwww')

        return list.filter(item => {
           const field = item[filterByField].toLowerCase();
           const filter = filterValue.toLowerCase();

           return field.indexOf(filter) >= 0;
        });
    }

}
