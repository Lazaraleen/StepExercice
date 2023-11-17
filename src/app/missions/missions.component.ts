import { Component } from '@angular/core';

@Component({
  selector: 'app-missions',
  templateUrl: './missions.component.html',
  styleUrls: ['./missions.component.css']
})

export class MissionsComponent {
  present={
      "photo": "../../assets/groupepersonnes.jpg",
      "titre": "Découvrez nos missions",
      "soustitre": "20 ans d'innovation au service de l'inclusion",
      "texte": "STEP depuis deux décennies ne cesse de réinventer en diversifiant ses activités et ses engagements",
      "logo": "../../assets/Group 12.png"
    };
    missions = [
      {
        "titre": "Raison d'être",
        "texte": "«Personne n’est inemployable» tel est notre credo!",
        "photo": "../../assets/immeuble.jpg"
      },
      {
        "titre": "Nos Valeurs",
        "texte": "Une histoire qui dure depuis 20 ans",
        "photo": "../../assets/bouchon.jpg"
      },
      {
        "titre": "Partenaires",
        "texte": "Ils nous font confiance… et nous aussi",
        "photo": "../../assets/livreouvert.jpg"
      }
    ];
}
