import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Character } from '../models/character.model';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  private apiUrl = 'https://rickandmortyapi.com/api/character';

  constructor(private http: HttpClient) { }

  getCharacters(page: number = 1, searchQuery?: string): Observable<any> {
    let queryUrl = `${this.apiUrl}?page=${page}`;
    if (searchQuery) {
      queryUrl += `&name=${encodeURIComponent(searchQuery)}`;
    }
    return this.http.get(queryUrl);
  }

  getCharacter(id: number): Observable<Character> {
    return this.http.get<Character>(`${this.apiUrl}/${id}`);
  }
}
