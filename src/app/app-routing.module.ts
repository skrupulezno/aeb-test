import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { CharacterDetailComponent } from "./character-detail/character-detail.component";


const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'character/:id', component: CharacterDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
