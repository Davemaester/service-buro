import { Component } from "@angular/core";
import { StyledDirective } from "./directive/styled.directive";
import { FormsModule } from "@angular/forms";

@Component({
  standalone: true,
  templateUrl: "./styled.component.html",
  imports: [StyledDirective, FormsModule],
})
export default class StyledComponent {
  text: string = "Lorem Ipsum";
}
