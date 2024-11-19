import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid'

import { Character } from '../interfaces/charactar.interface';

@Injectable({
  providedIn: 'root',
})
export class DbzService {
  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Naruto',
      power: 1000,
    },
    {
      id: uuid(),
      name: 'Kakashi',
      power: 9500,
    },
    {
      id: uuid(),
      name: 'Sakura',
      power: 5000,
    },
  ];

  addCharacter(character: Character): void {
    const NewCharacter: Character = { id: uuid(), ...character  };
    this.characters.push(character);
  }

  deleteCharacterById( id:string ) {
    this.characters = this.characters.filter( character => character.id !== id)
  }
}
