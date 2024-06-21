import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-delete-character',
  templateUrl: './delete-character.component.html',
  styleUrl: './delete-character.component.css',
})
export class DeleteCharacterComponent {
  public id: string = '';

  @Output()
  public idToDelete: EventEmitter<string> = new EventEmitter();

  emitId(): void {
    this.idToDelete.emit(this.id);
  }
}
