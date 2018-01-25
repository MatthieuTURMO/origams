import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rex-timeline-visu',
  templateUrl: './rex-timeline-visu.component.html',
  styleUrls: ['./rex-timeline-visu.component.css']
})
export class RexTimelineVisuComponent implements OnInit {

  @Input() data = [];

  constructor() { }

  ngOnInit() {
  }

}
