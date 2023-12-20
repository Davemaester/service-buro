import { NgIf } from "@angular/common";
import { Component } from "@angular/core";
import { MatSidenavModule } from "@angular/material/sidenav";
import { RouterModule } from "@angular/router";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatMenuModule } from "@angular/material/menu";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatListModule } from "@angular/material/list";
@Component({
  standalone: true,
  selector: "app-layout",
  templateUrl: "./layout.html",
  styleUrls: ["./layout.scss"],
  imports: [
    MatSidenavModule,
    RouterModule,
    NgIf,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatListModule,
  ],
})
export default class LayoutComponent {
  showFiller: boolean = false;
}
