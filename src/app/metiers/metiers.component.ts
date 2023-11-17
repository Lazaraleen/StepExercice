import { Component } from '@angular/core';

@Component({
  selector: 'app-metiers',
  templateUrl: './metiers.component.html',
  styleUrls: ['./metiers.component.css']
})
export class MetiersComponent {
  metier={
    "photo": "../../assets/reunion.jpg",
    "titre": "Des solutions et des métiers adaptés à vos besoins",
    "soustitre": "",
    "texte": "STEP vous accompagne en vous proposant des solutions globales et ses expertises dans plusieurs grands secteurs d'activités. Les flux documentaires et le back office, les services de territoire et l'ingénierie informatique.",
    "logo": ""
  };
}
