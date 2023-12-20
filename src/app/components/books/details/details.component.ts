import { Component, Input, OnInit } from "@angular/core";

@Component({
  standalone: true,
  selector: "app-book-details",
  templateUrl: "./details.component.html",
  styleUrls: ["./details.component.scss"],
})
export default class BookDetailsComponent implements OnInit {
  @Input() bookId!: string;
  ngOnInit(): void {}
}
