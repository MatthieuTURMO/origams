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
    "etat": -1
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
        "description": "lkhkjh",
        "etat": 0
      },
      {
        "date": "12/02/2018",
        "heure": "12:14",
        "description": "lkhkjh",
        "etat": 0
      },
      {
        "date": "12/01/2018",
        "heure": "13:09",
        "description": "lkhkjh",
        "etat": 0
      }
    ];
  }

  private ajouterEntree(i: number, index: number = null) {
    this.insertionStatus = i;
    this.showForm = true;
  }

  private onSubmit() {
    if (this.insertionStatus === -1) {
      this.timeline.splice(this.currentIndex, 0, this.nouvelleLigne);
    } else if (this.insertionStatus === 1) {
      this.timeline.splice(this.currentIndex + 1, 0, this.nouvelleLigne);
    } else {
      this.timeline.push(this.nouvelleLigne);
    }
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
      "etat": -1
    }
  }

}
