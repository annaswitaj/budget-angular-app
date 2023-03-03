import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-extended-card',
  templateUrl: './extended-card.component.html',
  styleUrls: ['./extended-card.component.scss']
})
export class ExtendedCardComponent {
  @Input() title!: string;
  @Input() displayIcon = false;
  @Input() subtitle!: string;
  @Input() amount = -23.45;
  //TODO
}
