import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})


export class AppComponent {
  title = 'Calculator-onexip';
  stringToEvaluate: string = "0";
  displayValue: string = "0";
  maxInputLength: number = 10; // Maximum number of allowed input characters

  takeInput(input: string) {
    if (this.stringToEvaluate === "0") {
      this.stringToEvaluate = input;
      this.displayValue = input;
    } else if (this.stringToEvaluate.length < this.maxInputLength) {
      this.stringToEvaluate += input;
      this.displayValue += input;
    }
  }

  clearInput() {
    this.stringToEvaluate = "0";
    this.displayValue = "0";
  }

  evaluate() {
    try {
      const result = eval(this.stringToEvaluate);
      this.stringToEvaluate = result.toString().slice(0, this.maxInputLength); // Limit the output length
      this.displayValue = result.toString().slice(0, this.maxInputLength);
    } catch (error) {
      console.error("Error: Invalid expression");
      this.stringToEvaluate = "";
      this.displayValue = "Error";
    }
  }
}

