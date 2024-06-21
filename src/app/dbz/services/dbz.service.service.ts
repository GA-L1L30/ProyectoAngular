import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.intercae';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class DbzService {
  public characters: Character[] = [
    {
      id: uuid(),
      name: 'krilin',
      power: 100,
    },
    {
      id: uuid(),
      name: 'goku',
      power: 200,
    },
    {
      id: uuid(),
      name: 'goku',
      power: 200,
    },
    {
      id: uuid(),
      name: 'vegeta',
      power: 300,
    },
  ];
  constructor() {}

  addCharacter(character: Character): void {
    const newCharacter: Character = {
      id: uuid(),
      ...character, //create a copy
    };
    console.log(newCharacter);
    this.characters.push(newCharacter);
  }

  onDeleteId(id: number): void {
    this.characters.splice(id, 1);
  }

  onDeletebyId(id: string): void {
    this.characters = this.characters.filter(
      (character) => character.id !== id
    );
  }

  //other way
  /* onDeletebyId(id: string): void {
    this.characters = this.characters.filter((character) => {
      return character.id !== id;
    });
  }
 */
}
