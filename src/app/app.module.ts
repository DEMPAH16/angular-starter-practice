import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule, MatButtonModule } from '@angular/material';

import { AppComponent } from './app.component';
import { TitleComponent } from './title/title.component';
import { LogoComponent } from './logo/logo.component';
import { CharacterCardComponent } from './character-card/character-card.component';
import { CharacterService } from './character.service';
import { PlanetCardComponent } from './planet-card/planet-card.component';
import { HeaderComponent } from './header/header.component';
import { NavButtonComponent } from './nav-button/nav-button.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CharacterComponent } from './character/character.component';
import { AppRoutingModule } from './app-routing.module';
import { PlanetComponent } from './planet/planet.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    LogoComponent,
    CharacterCardComponent,
    PlanetCardComponent,
    HeaderComponent,
    NavButtonComponent,
    CharacterComponent,
    PlanetComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatInputModule,
    MatButtonModule,
  ],
  providers: [
    CharacterService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
