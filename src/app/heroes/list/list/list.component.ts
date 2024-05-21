import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  public heroesName: string[] = ['Spiderman', 'ignacio'];
  public deleteNames: string[] = [];

  deleteLastHeroe(): void {
    let element = this.heroesName.pop();

    this.deleteNames.push(element!);
  }
}
