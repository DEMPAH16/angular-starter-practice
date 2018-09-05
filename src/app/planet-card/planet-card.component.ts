import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'my-planet-card',
  templateUrl: './planet-card.component.html',
  styleUrls: ['./planet-card.component.css']
})
export class PlanetCardComponent implements OnInit {
  @Input()
  planet = null;

  constructor() { }

  ngOnInit() {
  }

}
