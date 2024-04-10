import { Component, OnInit } from '@angular/core';
import { CharacterService } from './services/character.service';
import { Character } from './models/character.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
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
      case 'male': return 'path/to/male-icon.svg';
      case 'female': return 'path/to/female-icon.svg';
      default: return 'path/to/other-icon.svg';
    }
  }
}
