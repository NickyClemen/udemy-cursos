import { Component } from '@angular/core';

@Component({

  selector: 'app-add-elements',
  templateUrl: './add-elements.component.html',
  styles: [`

    .fontColor {

      color: #ffffff;
      font-weight: bold;

    }

  `]

})
export class AddElementsComponent {

  public noneDisplay:boolean = false;
  public inputValue:string = '';
  public allValues:string[] = [];

  public viewValue(event: Event):void {

    this.inputValue = (<HTMLInputElement>event.target).value;

  }

  public pushValue():void {

    this.noneDisplay = !this.noneDisplay;
    this.allValues.push(this.inputValue);

  }

}
