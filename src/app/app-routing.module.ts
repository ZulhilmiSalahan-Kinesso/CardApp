import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateCardComponent } from './components/create-card/create-card.component';
import { CardPreviewComponent } from './components/card-preview/card-preview.component';
import { CardListComponent } from './components/card-list/card-list.component';


const routes: Routes = [
  { path: 'create-card', component: CreateCardComponent },
  { path: ':cardName', component: CardPreviewComponent},
  { path: 'card-list', component: CardListComponent},
  { path: 'create-card/:cardName', component: CreateCardComponent },
  { path: 'card-preview', component: CardPreviewComponent},
  { path: 'card-preview/:cardName', component: CardPreviewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
