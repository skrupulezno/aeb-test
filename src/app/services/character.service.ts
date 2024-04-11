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
  private apiUrlEpisode = 'https://rickandmortyapi.com/api/episode/';

  constructor(private http: HttpClient) {}

  getEpisodesInfo(episodeUrls: string[]): Observable<any> {
    const episodeIds = episodeUrls.map(url => url.split('/').pop()).join(',');

    const requestUrl = `${this.apiUrlEpisode}${episodeIds}`;

    return this.http.get(requestUrl);
  }

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
