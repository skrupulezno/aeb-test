import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../services/character.service';
import { Character } from '../models/character.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit {
  characters: Character[] = [];
  page = 1;
  filteredCharacters: Character[] = [];
  filterGender: string = '';
  searchQuery: string = '';

  constructor(private characterService: CharacterService, private router: Router) {}

  ngOnInit() {
    this.loadCharacters();
  }

  onScroll() {
    this.page++;
    this.loadCharacters();
  }

  private loadCharacters() {
    this.characterService.getCharacters(this.page).subscribe(data => {
      this.characters = this.characters.concat(data.results);
      this.filteredCharacters = this.characters;
    });
  }

  goToCharacter(id: number) {
    this.router.navigate(['/character', id]);
  }

  getGenderIcon(gender: string): string {
    switch (gender.toLowerCase()) {
      case 'male': return '../assets/male.svg';
      case 'female': return '../assets/female.svg';
      default: return '../assets/who.svg';
    }
  }

  sortByCreatedAt() {
    this.filteredCharacters.sort((a, b) => new Date(b.created).getTime() - new Date(a.created).getTime());
  }

  filterByGender() {
    this.filteredCharacters = this.filterGender ? this.characters.filter(character => character.gender === this.filterGender) : this.characters;
  }

  searchByName() {
    this.characterService.getCharacters(1, this.searchQuery).subscribe(data => {
      this.characters = data.results;
      this.filteredCharacters = data.results;
    });
  }
}
