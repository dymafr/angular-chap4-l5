import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  public fruits: string[] = ["fraise", "kiwi"];

  public addFruit(reference: HTMLInputElement) {
    this.fruits.push(reference.value);
    reference.value = "";
  }

  public deleteFruit(fruit: string) {
    this.fruits = this.fruits.filter(f => f !== fruit);
  }
}
