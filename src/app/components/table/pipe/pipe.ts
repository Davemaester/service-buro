import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "listFilter",
  pure: false,
  standalone: true,
})
export class listFilter implements PipeTransform {
  transform(items: any[], filter: FilterProps) {
    if (!items) return items;

    return items.filter(
      (item) => {
        return item["attributes"].content
          .toLocaleLowerCase()
          .includes(filter.value.toLocaleLowerCase());
      } //.includes(filter.value.toLocaleLowerCase())
    );
  }
}

export type FilterProps = {
  key: string;
  value: string;
};
