import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cardmissions',
  templateUrl: './cardmissions.component.html',
  styleUrls: ['./cardmissions.component.css']
})
export class CardmissionsComponent {
  @Input() titre: string="";
  @Input() texte: string="";
  @Input() photo: string="";
}
