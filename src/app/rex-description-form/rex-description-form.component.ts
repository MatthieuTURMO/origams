import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rex-description-form',
  templateUrl: './rex-description-form.component.html',
  styleUrls: ['./rex-description-form.component.css']
})
export class RexDescriptionFormComponent implements OnInit {

  @Input() data = [];

  private showForm: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  private toggleForm() {
    this.showForm = !this.showForm;
  }

}
