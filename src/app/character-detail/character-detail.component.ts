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
  // characterService: any;

  constructor(private route: ActivatedRoute, private characterService: CharacterService) {}
 // constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      let numericId = 0;
      if (id !== null) {
        numericId = Number(id);
      }
      this.characterService.getCharacter(numericId).subscribe((character: Character | null) => {
        this.character = character;
      });
    });
  }
}
