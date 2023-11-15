import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card3',
  templateUrl: './card3.component.html',
  styleUrls: ['./card3.component.css']
})
export class Card3Component {
  @Input() icone: string="";
  @Input() titre: string="";
  @Input() texte: string="";
  @Input() nombre: number=0;
  @Input() color: string="";
}
