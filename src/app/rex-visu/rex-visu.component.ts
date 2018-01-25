import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rex-visu',
  templateUrl: './rex-visu.component.html',
  styleUrls: ['./rex-visu.component.css']
})
export class RexVisuComponent implements OnInit {

  private timeline_data = [
    {
      "etat": 0,
      "heure": "12h",
      "description": "Déploiement khkj",
      "date": "07/07"
    },
    {
      "etat": 1,
      "heure": "12h",
      "description": "Défzefezt khkj",
      "date": "07/07"
    },
    {
      "etat": 2,
      "heure": "12h",
      "description": "aaaa khkj",
      "date": "07/07"
    },
    {
      "etat": 0,
      "heure": "13h",
      "description": "Après le correctif appliqué, tout est revenu à la normale.",
      "date": "07/07"
    }
  ]

  private capitalisation_entete = [
    "Numéro", "Description", "Généralisable"
  ]

  private capitalisation_data = [
    {
      "etat": 0,
      "heure": "Nous capitalisons bien. Après le correctif appliqué, tout est revenu à la normale. Après le correctif appliqué, tout est revenu à la normale.",
      "description": "Oui",
    },
    {
      "etat": 1,
      "heure": "Tout est ok",
      "description": "Non",
    },
    {
      "etat": 2,
      "heure": "Faire un récapitulatif",
      "description": "Oui",
    },
    {
      "etat": 0,
      "heure": "Retour à la normale.",
      "description": "Oui",
    }
  ]

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

  private description_detaillee_data = {
    "description_incident": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem fuga totam deleniti sequi itaque facilis culpa ipsam natus similique suscipit modi voluptas officiis sunt amet, vero commodi ? Enim, perferendis possimus",
    "causes_incident": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem fuga totam deleniti sequi itaque facilis culpa ipsam natus similique suscipit modi voluptas officiis sunt amet, vero commodi ? Enim, perferendis possimus",
    "actions_contournement": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem fuga totam deleniti sequi itaque facilis culpa ipsam natus similique suscipit modi voluptas officiis sunt amet, vero commodi ? Enim, perferendis possimus",
    "corrections_definitives": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem fuga totam deleniti sequi itaque facilis culpa ipsam natus similique suscipit modi voluptas officiis sunt amet, vero commodi ? Enim, perferendis possimus",
  }

  constructor() { }

  ngOnInit() {
  }

}
