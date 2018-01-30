import { Component, OnInit, ViewChild, HostListener, Inject, ElementRef } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-rex-form',
  templateUrl: './rex-form.component.html',
  styleUrls: ['./rex-form.component.css']
})
export class RexFormComponent implements OnInit {
  private description_detaillee_data = {
    "description_incident": {
      "main_comment": "commentaire principal",
      "more_comments":
        [{ "commentaire": "commentaire 1 desc", "auteur": "Jojo", "date": "12/02/2017" },
        { "commentaire": "commentaire 2 desc", "auteur": "Juju", "date": "12/02/2017" }],
      "new_comment": "",
    },
    "causes_incident": {
      "main_comment": "commentaire principal cause",
      "more_comments":
        [{ "commentaire": "commentaire 1 descc", "auteur": "Jojo", "date": "12/02/2017" },
        { "commentaire": "commentaire 2 descc", "auteur": "Jojo", "date": "12/02/2017" },
        { "commentaire": "commentaire 3 descc", "auteur": "Juju", "date": "12/02/2017" }],
      "new_comment": "",
    },
    "actions_contournement": {
      "main_comment": "commentaire principal ac",
      "more_comments":
        [{ "commentaire": "commentaire 1 desccc", "auteur": "Jojo", "date": "12/02/2017" },
        { "commentaire": "commentaire 2 desccc", "auteur": "Juju", "date": "12/02/2017" }],
      "new_comment": "",
    },
    "corrections_definitives": {
      "main_comment": "commentaire principal cor",
      "more_comments":
        [{ "commentaire": "commentaire 1 descccc", "auteur": "Jojo", "date": "12/02/2017" }],
      "new_comment": "",
    }
  }

  private infos_data = {
    "date_incident": "19/10/2017",
    "date_REX": "14/03/2018",
    "cree_par": "Isabelle CASADO",
    "fonction": "CA"
  }

  private dates_validation_data = {
    "cdc": "12/3/2017",
    "domaine": "12/3/2017",
    "nom_domaine": "D. Mouillot",
    "projet": "NC",
    "nom_projet": "NC"
  }

  private domaine_pole_data = {
    "domaine": "App Spécifique",
    "pole": "SOC"
  }

  private indices_data = {
    "impact": ["Accessibilité", "Performances"],
    "causalite": ["Application"],
    "autres_indices": {
      "nb_utilisateurs": 1100,
      "severite": "Entreprise",
      "nb_appels": 5,
      "nb_flags_mysi": 1,
      "duree_incident": "20h",
      "frequence": "Rare"
    }
  }

  //la position des div de description et de timeLine, qui servira pour mettre en fixed la div de gauche d'informations
  private offsetTopFixed = 0;
  private fixed: boolean = false;

  @ViewChild('description')
  private desc: ElementRef;


  constructor(
    @Inject(DOCUMENT) private document: Document
  ) { }

  ngOnInit() {
    this.setOffset();
    this.onWindowScroll();
  }

  //récupère la hauteur de l'écran
  //et l'offsetTop de la div de description
  setOffset() {
    this.offsetTopFixed = this.desc.nativeElement.offsetTop;
  }

  //fonction qui détecte le scroll
  @HostListener("window:scroll", [])
  onWindowScroll() {
    this.fixed = window.pageYOffset >= this.offsetTopFixed ? true : false;
  }

  @HostListener('window:resize', [])
  onResize() {
    this.setOffset();
  }


}
