import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  public name: string = 'ironman';
  public age: number = 45;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  changeAge(): void {
    this.age = 30;
  }

  changeName(): void {
    this.name = 'ignacio';
  }

  resetForm(): void {
    this.name = 'ironman';
    this.age = 45;
  }
}
