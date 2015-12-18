import { Component, View, ElementRef } from 'angular2/core';

@Component({
  selector: 'app'
})
@View({
  templateUrl: 'app/app.html'
})
export class App {
  constructor(elementRef) {
    this.elementRef = elementRef;
  }
}
App.parameters=[ElementRef];