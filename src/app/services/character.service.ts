import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, skip } from 'rxjs';
import { Character } from '../models/character.model';

type Filters = {
  [key: string]: string | number | undefined;
};

@Injectable({
  providedIn: 'root'
})

export class CharacterService {
  private apiUrl = 'https://rickandmortyapi.com/api/character';

  constructor(private http: HttpClient) {}

  getCharacters(filters: Filters = {}): Observable<any> {
    let params = new HttpParams();

    Object.keys(filters).forEach(key => {
      const value = filters[key];
      if (value === '') {
      }
      else if (value !== undefined) {
        params = params.set(key, value.toString());
      }
    });

    return this.http.get(this.apiUrl, { params });
  }

  getCharacter(id: number): Observable<Character> {
    return this.http.get<Character>(`${this.apiUrl}/${id}`);
  }
}
