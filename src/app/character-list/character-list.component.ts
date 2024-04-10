import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../services/character.service';
import { Character } from '../models/character.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterList implements OnInit {
  characters: Character[] = [];
  page = 1;

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
}
