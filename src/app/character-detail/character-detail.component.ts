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
    this.route.params.subscribe(params => {
      const id = params['get']('id');
      this.characterService.getCharacter(id).subscribe((character: Character | null) => {
        this.character = character;
      });
    });
  }
}
