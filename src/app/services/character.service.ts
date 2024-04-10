import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Character } from '../models/character.model'; // Убедитесь, что путь корректный

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  private apiUrl = 'https://rickandmortyapi.com/api/character';

  constructor(private http: HttpClient) { }

  getCharacters(page: number): Observable<any> {
    return this.http.get(`${this.apiUrl}?page=${page}`);
  }

  getCharacter(id: number): Observable<Character> {
    return this.http.get<Character>(`${this.apiUrl}/${id}`);
  }
}
