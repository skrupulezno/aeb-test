import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharacterService } from '../services/character.service';
import { Character } from '../models/character.model';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss']
})
export class CharacterDetailComponent implements OnInit {
  character: Character | null = null;

  constructor(private route: ActivatedRoute, private characterService: CharacterService) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.characterService.getCharacter(id).subscribe(character => {
        this.character = character;
      });
    });
  }
}
