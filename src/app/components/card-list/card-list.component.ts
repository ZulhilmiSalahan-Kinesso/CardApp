import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
import { Card } from 'src/app/models/card';
import { MatList, MatListItem } from '@angular/material';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {

  private cards: Card[] = [];
  constructor(
    private firebaseService: FirebaseService
  ) { }

  ngOnInit() {
    this.firebaseService.GetCards().subscribe(x => {
      x.forEach( y => {
        this.cards.push(y);
      });
    });
  }

}
