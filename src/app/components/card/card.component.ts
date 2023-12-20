import { Component, Input } from "@angular/core";
import { TBooks } from "../book";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
})
export class CardComponent {
  @Input() book!: TBooks;
}
