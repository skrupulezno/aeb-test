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
  //clearCharacters: Character[] = [];
  filteredCharacters: Character[] = [];
  filters = {
    name: '',
    status: '',
    species: '',
    type: '',
    gender: '',
    page: 1,
  };

  constructor(private characterService: CharacterService, private router: Router) {}

  ngOnInit() {
    this.applyFilters();
  }

  onScroll() {
    this.filters.page++;
    this.applyFilters();
  }


  applyFilters() {
    this.characterService.getCharacters(this.filters).subscribe(data => {
      this.characters = this.characters.concat(data.results);
    });
  }

  applyButton() {
    this.characters = [];
    this.applyFilters();
  }

  clearFilters() {
    this.characters = [];
    this.filters = {
      name: '',
      status: '',
      species: '',
      type: '',
      gender: '',
      page: 1,
    };
    this.applyFilters();
  }

  getEpisodesString(character: Character): string {
    const episodes : string[] = [];
    character.episode.forEach(element => {
      episodes.push(parseInt(element).toString());
    });
    console.log(episodes);
    return episodes.join(', ');
  }

  sortByEpisodeCount() {
    this.characters.sort((a, b) => {
      return b.episode.length - a.episode.length;
    });
  }

  sortByCreatedAt() {
    this.characters.sort((a, b) => {
      return new Date(b.created).getTime() - new Date(a.created).getTime();
    });
  }

  goToCharacter(id: number) {
    this.router.navigate(['/character', id]);
  }

  getGenderIcon(gender: string): string {
    switch (gender.toLowerCase()) {
      case 'male': return '../assets/male.svg';
      case 'female': return '../assets/female.svg';
      default: return '../assets/alien.svg';
    }
  }
}
