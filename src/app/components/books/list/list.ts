import { CommonModule, NgFor, NgIf } from "@angular/common";
import { Component, OnInit, inject } from "@angular/core";
import { Observable } from "rxjs";
import { ApiService } from "src/app/service/api.service";
import { TBooks } from "../../book";
import { CardModule } from "../../card/card.module";
import { RouterLink } from "@angular/router";

@Component({
  standalone: true,
  templateUrl: "./list.html",
  styleUrls: ["./list.scss"],
  providers: [ApiService],
  imports: [CommonModule, CardModule, RouterLink],
})
export default class DashboardComponent implements OnInit {
  service = inject(ApiService);
  books$!: Observable<TBooks[]>;
  ngOnInit(): void {
    this.books$ = this.service.get();
  }
}
