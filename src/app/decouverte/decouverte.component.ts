import { Component } from '@angular/core';

@Component({
  selector: 'app-decouverte',
  templateUrl: './decouverte.component.html',
  styleUrls: ['./decouverte.component.css']
})
export class DecouverteComponent {
  decouvertes = [
    {
      "titre": "Flux documentaire",
      "texte": "Numérisation hauts volumes, patrimoniale, microformes, hors format, grand format et traitement de données. Editique, impression déportée de courriers de gestion.",
      "mini":"",
      "photo": "../../assets/document.jpg",
      "classe":"rien"
    },
    {
      "titre": "Studio de développement",
      "texte": "Logiciels web éco-conçus pour des solutions informatiques sur mesure (développement web, système d’information, hébergement, base de données, applications …)",
      "mini":"",
      "photo": "../../assets/studiodev.jpg",
      "classe":"rien"
    },
    {
      "titre": "L'atelier numérique",
      "texte": "Pour des services de maintenance et d’assistance informatique ou du matériel informatique reconditionné.",
      "mini":"",
      "photo": "../../assets/maintenance.jpg",
      "classe":"rien"
    },
    {
      "titre": "Livraison urbaine",
      "texte": "Petite logistique - Livraison Urbaine : dernier kilomètre en vélo cargo de palettes et colis, ramassage de bio déchets. distribution, livraison triporteur et collecte de proximité.",
      "mini":"",
      "photo": "../../assets/casque2.jpg",
      "classe":"rien"
    },
    {
      "titre": "Service postal",
      "texte": "Premier opérateur postal alternatif de Nouvelle Aquitaine ; collecte, remise et distribution de courrier et de recommandé sur Pau",
      "mini":"",
      "photo": "../../assets/livraison.jpg",
      "classe":"rien"
    },
    {
      "titre": "Conciergerie d'entreprise",
      "texte": "Etre au bureau comme à la maison, avec la Conciergerie Solidaire. Améliorer la vie de l'entreprise.",
      "mini":"",
      "photo": "../../assets/concierge.jpg",
      "classe":"rien"
    },
    {
      "titre": "Formations",
      "texte": "Formation et inclusion numérique : courte ou longue, formation numérique, digitale pour lutter contre la fracture numérique et promouvoir l’emploi durable",
      "mini":"",
      "photo": "../../assets/bureau.jpg",
      "classe":"rien"
    },
    {
      "titre": "Quelles applications pour nos métiers?",
      "texte": '" STEP est une entreprise comme les autres, qui se doit d’avoir des résultats pour pérenniser ses actions. Mais nous démontrons jour après jour que l’on peut allier efficacité économique, finalité sociale et responsabilité environnementale "',
      "mini":"Kenny Bertonazzi, Directeur Général de Step",
      "photo": "",
      "classe":"double"
    }
  ]
}
