import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if (!searchText) { return items; }
    return items.filter(function(item) {
      return item.name.toLowerCase().includes(searchText.toLowerCase());
    });
  }
}
