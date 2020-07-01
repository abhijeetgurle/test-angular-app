import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  num1 = "";
  num2 = "";
  ans = "";

  constructor(private http: HttpClient) {}

  onSubmit() {
    this.http
      .post("/test", { num1: this.num1, num2: this.num2 })
      .subscribe((res) => {
        this.ans = res["data"];
      });
  }
}
