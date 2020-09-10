import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // numbers = [1, 2, 3, 4, 5];
  public oddNumbers:number[] = [1, 3, 5];
  public evenNumbers:number[] = [2, 4];
  public onlyOdd:boolean = false;
  public value:number = 10;
}
