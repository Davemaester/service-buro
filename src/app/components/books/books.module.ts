import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: "",
        loadComponent: () => import("./list/list"),
      },

      {
        path: "table-list",
        loadComponent: () => import("../table/table.component"),
      },

      {
        path: "styled",
        loadComponent: () => import("../styled/styled.component"),
      },

      {
        path: ":bookId",
        loadComponent: () => import("./details/details.component"),
      },
    ]),
  ],
})
export class BooksModule {}
