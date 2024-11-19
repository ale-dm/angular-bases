import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/charactar.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  
  @Input()
  public characterList: Character[] = [{
    name: 'Sasuke',
    power: 10
  }]

  //  onDeleteId
  @Output()
  onDelete: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(id?: string):void {
    if(!id) return;
    this.onDelete.emit( id )
  }
}
