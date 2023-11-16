import { Component } from '@angular/core';

@Component({
  selector: 'app-projets',
  templateUrl: './projets.component.html',
  styleUrls: ['./projets.component.css']
})
export class ProjetsComponent {
  projets=[
    {
      "image": "../../assets/film.jpg",
      "nom": "Je suis un projet",
      "texte": "Je suis une description qui supporte le titre"
    },
    {
      "image": "../../assets/livre.jpg",
      "nom": "Je suis un projet",
      "texte": "Je suis une description qui supporte le titre"
    },
    {
      "image": "../../assets/velo.jpg",
      "nom": "Je suis un projet",
      "texte": "Je suis une description qui supporte le titre"
    }
  ];
}
