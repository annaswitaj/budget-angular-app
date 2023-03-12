import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-btn-card',
  templateUrl: './btn-card.component.html',
  styleUrls: ['./btn-card.component.scss']
})
export class BtnCardComponent {
  @Input() btnText!: string;
  @Input() description!: string;
}
