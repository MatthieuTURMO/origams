import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-carte',
  templateUrl: './carte.component.html',
  styleUrls: ['./carte.component.css']
})
export class CarteComponent implements OnInit {

  @Input() titre: String = '';
  constructor() { }

  ngOnInit() {
  }

}
