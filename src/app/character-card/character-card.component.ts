import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'my-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.css']
})
export class CharacterCardComponent implements OnInit {
  @Input()
  character;

  constructor() {}

  ngOnInit() {
  }

}


// AngularJS v1.5+
// angular
//   .module('myModule')
//   .component('myGreeting', {
//     template: `
//       <h1>{{ $ctrl.title }}</h1>
//     `,
//     templateUrl: '/app/ui/forms/labeled',
//     bindings: {
//       character: '<',
//       onCharacterUpdate: '&',
//     },
//     controller: myGreetingController,
//   });

// myGreetingController.$inject = ['CharacterService'];

// function myGreetingController(CharacterService) {
//   this.title = 'blah';
//   this.character = null;

//   CharacterService.getCharacter(1)
//     .then(character => this.character = character);
// }
