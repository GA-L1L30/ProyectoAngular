import { Component } from '@angular/core';
import { Character } from '../../interfaces/character.intercae';
import { DbzService } from '../../services/dbz.service.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css',
})
export class MainPageComponent {
  constructor(private DbzService: DbzService) {}

  get characters(): Character[] {
    return [...this.DbzService.characters]; //create a copy
  }

  onDeleteCharacter(id: number): void {
    this.DbzService.onDeleteId(id);
  }

  onDeleteCharacteById(id: string): void {
    this.DbzService.onDeletebyId(id);
  }

  onNewCharacter(character: Character) {
    this.DbzService.addCharacter(character);
  }
}
