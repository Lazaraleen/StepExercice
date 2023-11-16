import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cardprojet',
  templateUrl: './cardprojet.component.html',
  styleUrls: ['./cardprojet.component.css']
})
export class CardprojetComponent {
  @Input() image: string="";
  @Input() nom: string="";
  @Input() texte: string="";
}
