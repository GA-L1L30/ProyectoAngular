import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { ListComponent } from './components/list/list.component';
import { AddCharacterComponent } from './components/add-character/add-character.component';
import { FormsModule } from '@angular/forms';
import { DeleteCharacterComponent } from './components/delete-character/delete-character.component';

@NgModule({
  declarations: [MainPageComponent, ListComponent, AddCharacterComponent, DeleteCharacterComponent],
  imports: [CommonModule, FormsModule],
  exports: [MainPageComponent],
})
export class DbzModule {}
