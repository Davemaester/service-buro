import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
@Component({
  standalone: true,
  templateUrl: "./landing.html",
  styleUrls: ["./landing.scss"],
  imports: [RouterLink, MatCardModule, MatButtonModule],
})
export default class LandingComponent {}
