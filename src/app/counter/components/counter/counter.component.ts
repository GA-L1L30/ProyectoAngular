import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `<h3>Counter : {{ counter }}</h3>

    <button (click)="increaseBy(1)">+1</button>
    <button (click)="decreaseBy()">-1</button>
    <button (click)="reset()">reset</button> `,
})
export class CounterComponent implements OnInit {
  constructor() {}

  public counter: number = 10;

  //with and without params
  increaseBy(number: number): void {
    this.counter += number;
  }

  decreaseBy(): void {
    this.counter -= 1;
  }

  reset(): void {
    this.counter = 10;
  }

  ngOnInit() {}
}
