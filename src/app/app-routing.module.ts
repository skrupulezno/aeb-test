import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharacterListComponent } from "./character-list/character-list.component";
import { CharacterDetailComponent } from './character-detail/character-detail.component';


const routes: Routes = [
  { path: '', component: CharacterListComponent },
  { path: 'character/:id', component: CharacterDetailComponent },
];

//убрать в проде
RouterModule.forRoot(routes, { enableTracing: true })

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
