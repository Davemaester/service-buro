import { Injectable, inject } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { TBooks, books } from "../components/book";

@Injectable()
export class ApiService {
  books = new BehaviorSubject<TBooks[]>(books);
  constructor() {}

  get() {
    return this.books;
  }
}
