import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import LayoutComponent from "./components/layout/layout";

const routes: Routes = [
  {
    path: "books",
    component: LayoutComponent,
    children: [
      {
        path: "",
        loadChildren: () =>
          import("./components/books/books.module").then((m) => m.BooksModule),
      },

      {
        path: "table-list",
        loadComponent: () => import("./components/table/table.component"),
      },

      {
        path: "styled",
        loadComponent: () => import("./components/styled/styled.component"),
      },
    ],
  },

  {
    path: "lading-page",
    loadComponent: () => import("./components/landing-page/landing"),
  },
  {
    path: "**",
    redirectTo: "lading-page",
    pathMatch: "full",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { bindToComponentInputs: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
