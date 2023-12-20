import { Component, OnInit, ViewChild, inject } from "@angular/core";
import { Observable, map, switchMap } from "rxjs";
import { ApiService } from "src/app/service/api.service";
import { TBooks } from "../book";
import { CommonModule, NgIf } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { FilterProps, listFilter } from "./pipe/pipe";
import { MatTableDataSource, MatTableModule } from "@angular/material/table";
import { MatSort, MatSortModule } from "@angular/material/sort";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
@Component({
  standalone: true,
  templateUrl: "./table.component.html",
  providers: [ApiService],
  imports: [
    CommonModule,
    FormsModule,
    listFilter,
    MatTableModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
  ],
})
export default class TableListComponent implements OnInit {
  service = inject(ApiService);
  books$!: Observable<TBooks[]>;
  dataSource!: any;
  filter: FilterProps = {
    key: "",
    value: "",
  };
  displayedColumns: string[] = ["id", "title"];
  ngOnInit(): void {
    this.service.get().subscribe((v: TBooks[]) => {
      const m = v.map((v) => {
        return {
          id: v.id,
          title: v.attributes.content,
        };
      });
      this.dataSource = new MatTableDataSource(m);
    });
  }

  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  filterData() {
    this.dataSource.filter = this.filter.key;
  }
}
