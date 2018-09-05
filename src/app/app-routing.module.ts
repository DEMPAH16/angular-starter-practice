import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterComponent } from './character/character.component';
import { PlanetComponent } from './planet/planet.component';

const routes = [
  { path: 'character', component: CharacterComponent },
  { path: 'planets', component: PlanetComponent },
  // { path: '**', component: '' }, // default route (also needs a component, but didn't have one)
] as Routes;

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class AppRoutingModule { }
