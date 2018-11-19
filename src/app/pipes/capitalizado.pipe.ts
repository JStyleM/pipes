import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'capitalizado'})
export class CapitalizadoPipe implements PipeTransform {
    transform(value: string, todas: boolean = true): string {

        value = value.toLowerCase();

        const nombres = value.split(' ');

        // tslint:disable-next-line:forin
        for (const i in nombres) {
            nombres[i] = nombres[i][0].toUpperCase() + nombres[i].substr(1);
        }

        return nombres.join(' ');
    }
}
