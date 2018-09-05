import { Component, OnInit } from '@angular/core';
import { PlanetService } from '../planet.service';

@Component({
  selector: 'my-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.css']
})
export class PlanetComponent implements OnInit {
  planets = [];

  constructor(private planetService: PlanetService) { }

  ngOnInit() {
    this.planetService.getPlanets()
      .subscribe((response: any) => {
        this.planets = response.results;
      });
  }

}
