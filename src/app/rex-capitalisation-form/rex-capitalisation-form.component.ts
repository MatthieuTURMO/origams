import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rex-capitalisation-form',
  templateUrl: './rex-capitalisation-form.component.html',
  styleUrls: ['./rex-capitalisation-form.component.css']
})
export class RexCapitalisationFormComponent implements OnInit {
  private capital = [];
  private nouvelleLigne = {
    "numero": -1,
    "description": "",
    "generalisable": false
  }
  private showForm: boolean = false;


  constructor() { }

  ngOnInit() {
    this.capital = [
      {
        "numero": 1,
        "description": "Capitaliser",
        "generalisable": false
      },
      {
        "numero": 2,
        "description": "Capitaliser mieux",
        "generalisable": false
      },
      {
        "numero": 3,
        "description": "Capitaliser encore mieux",
        "generalisable": true
      }
    ];
  }

  private ajouterEntree() {
    this.showForm = true;
  }

  private submitEntree() {
    this.capital.push(this.nouvelleLigne);
    this.resetNouvelleLigne();
    this.showForm = false;
  }

  private annulerEntree() {
    this.showForm = false;
    this.resetNouvelleLigne();
  }

  private supprimer(index: number) {
    this.capital.splice(index, 1);
  }

  private resetNouvelleLigne() {
    this.nouvelleLigne = {
      "numero": -1,
      "description": "",
      "generalisable": false
    }
  }

}
