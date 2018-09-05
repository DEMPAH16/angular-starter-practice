import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private http: HttpClient) {}
  
  getCharacter(id: number) {
    return this.http.get(`https://swapi.co/api/people/${id}/`);
  }
}
