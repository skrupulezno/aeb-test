import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { CharacterDetailComponent } from "./character-detail/character-detail.component";


const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'character/:id', component: CharacterDetailComponent }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    InfiniteScrollModule,
    AppRoutingModule,
    [RouterModule.forRoot(routes)],
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }
