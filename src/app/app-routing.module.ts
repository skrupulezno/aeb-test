import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { HomeComponent } from './home/home.component';
import { CharacterList } from "./character-list/character-list.component";
import { CharacterDetailComponent } from './character-detail/character-detail.component';


const routes: Routes = [
  { path: '', component: CharacterList },
  { path: 'character/:id', component: CharacterDetailComponent },
];

//убрать в проде
RouterModule.forRoot(routes, { enableTracing: true })

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
