import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rex-timeline-form',
  templateUrl: './rex-timeline-form.component.html',
  styleUrls: ['./rex-timeline-form.component.css']
})
export class RexTimelineFormComponent implements OnInit {

  private timeline = [];
  private nouvelleLigne = {
    "date": "",
    "heure": "",
    "description": "",
    "etat": 0
  }
  private showForm: boolean = false;

  //0 : à la fin
  //-1 : before
  //1 : after
  private insertionStatus = 0;
  private currentIndex = -1;

  constructor() { }

  ngOnInit() {
    this.timeline = [
      {
        "date": "12/01/2018",
        "heure": "11:08",
        "description": "MEP de la nouvelle version.",
        "etat": 0
      },
      {
        "date": "13/01/2018",
        "heure": "12:14",
        "description": "Problème de connexion.",
        "etat": 2
      },
      {
        "date": "13/01/2018",
        "heure": "12:14",
        "description": "Mise en place d'un correctif.",
        "etat": 1
      },
      {
        "date": "14/01/2018",
        "heure": "13:09",
        "description": "Retour à la normale",
        "etat": 0
      }
    ];
  }

  private ajouterEntree(i: number, index: number = -1) {
    this.insertionStatus = i;
    this.currentIndex = index;
    this.showForm = true;
  }

  private submitEntree() {
    switch(this.insertionStatus) {
      case -1 : {
        this.timeline.splice(this.currentIndex, 0, this.nouvelleLigne);
        break;
      }
      case 1 : {
        this.timeline.splice(this.currentIndex + 1, 0, this.nouvelleLigne);
        break;
      }
      default : {
        this.timeline.push(this.nouvelleLigne);
        break;
      }
    }
    this.resetNouvelleLigne();
    this.showForm = false;
  }

  private annulerEntree() {
    this.showForm = false;
    this.resetNouvelleLigne();
  }

  private supprimer(index: number) {
    this.timeline.splice(index, 1);
  }

  private resetNouvelleLigne() {
    this.nouvelleLigne = {
      "date": "",
      "heure": "",
      "description": "",
      "etat": 0
    }
  }

}
