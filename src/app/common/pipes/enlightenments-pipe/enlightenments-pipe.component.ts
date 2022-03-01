import { Injectable, Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'enlightFilter'
})
@Injectable()
export class EnlightenmentsPipe implements PipeTransform {
    transform(items: any[], value: Array<any>): any[] {
        if (!items) return [];
        if (!value || value.length == 0) return items;

        return items.filter(
            it => !value.find(x => x.description === it.code));
    }
}