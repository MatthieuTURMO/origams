import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tableau',
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.css']
})
export class TableauComponent implements OnInit {

  public arrayOfKeys;

  @Input() data = [];
  @Input() entete = [];

  constructor() { 
  }

  ngOnInit() {
    this.arrayOfKeys = Object.keys(this.data[0]);
  }

}
