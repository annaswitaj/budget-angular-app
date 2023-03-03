import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ExtendedCardComponent} from './extended-card/extended-card.component';
import {BtnCardComponent} from './btn-card/btn-card.component';

@NgModule({
  declarations: [ExtendedCardComponent, BtnCardComponent],
  imports: [CommonModule],
  exports: [ExtendedCardComponent, BtnCardComponent]
})
export class SharedModule {}
