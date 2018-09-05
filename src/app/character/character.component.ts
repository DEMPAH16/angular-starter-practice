import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../character.service';

@Component({
  selector: 'my-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {
  character;
  インプット = '無';

  constructor(private characterService: CharacterService) { }

  ngOnInit() {
    this.characterService.getCharacter(1)
      .subscribe(character => {
        this.character = character;
        this.character.foo = this.インプット;
      });
  }

}
