import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cardpresentation',
  templateUrl: './cardpresentation.component.html',
  styleUrls: ['./cardpresentation.component.css']
})
export class CardpresentationComponent {
  @Input() photo: string="";
  @Input() titre: string="";
  @Input() soustitre: string="";
  @Input() texte: string="";
  @Input() logo: string="";
}
