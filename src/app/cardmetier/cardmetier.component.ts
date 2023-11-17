import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cardmetier',
  templateUrl: './cardmetier.component.html',
  styleUrls: ['./cardmetier.component.css']
})
export class CardmetierComponent {
  @Input() titre: string="";
  @Input() texte: string="";
  @Input() mini: string="";
  @Input() photo: string="";
  @Input() classe: string="";
}
