import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CharacterService } from '../services/character.service';
import { Character } from '../models/character.model';
import { Episode } from '../models/episode.model';
@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss']
})

export class CharacterDetailComponent implements OnInit {
  character: Character | null = null;
  episodeData: Episode[] = [];
  episodeUrls : string[] = [];

  constructor(private route: ActivatedRoute, private characterService: CharacterService, private router: Router) {}
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      let numericId = 0;
      if (id !== null) {
        numericId = Number(id);
      }
      this.characterService.getCharacter(numericId).subscribe((character: Character | null) => {
        this.character = character;
        this.episodeUrls = character!.episode;
        this.characterService.getEpisodesInfo(this.episodeUrls).subscribe(data => {
          this.episodeData = Array.isArray(data) ? data : [data];
          console.log(this.episodeData);
        });
      });
    });
  }

  getEpisodesString(character: Character): string {
    return this.episodeData.map(episode => episode.name).join(', ');
  }


  getGenderIcon(gender: string): string {
    switch (gender.toLowerCase()) {
      case 'male': return 'assets/male.svg';
      case 'female': return 'assets/female.svg';
      default: return 'assets/alien.svg';
    }
  }

  goToHome() {
    this.router.navigate(['/']);
  }
}
