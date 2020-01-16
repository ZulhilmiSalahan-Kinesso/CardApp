import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FirebaseService } from 'src/app/services/firebase.service';
import { Card } from 'src/app/models/card';
import { Observable } from 'rxjs';
import { GuestBook } from 'src/app/models/guestbook';
import { slick } from 'slick-carousel';

@Component({
  selector: 'app-card-preview',
  templateUrl: './card-preview.component.html',
  styleUrls: ['./card-preview.component.scss']
})
export class CardPreviewComponent implements OnInit {

  private cards: Observable<Card[]>;

  private guestBook: GuestBook;

  private card: Card = new Card();

  private cardParam: Card = new Card();

  constructor(
    private route: ActivatedRoute,
    private firebaseService: FirebaseService) {
      this.firebaseService.GetGuestBook().subscribe(x => {
        console.log(x);
      });
  }

  ngOnInit() {
    this.route.paramMap.subscribe(x => {
      this.cardParam.CardName = x.get('cardName');
      this.firebaseService.GetCard(this.cardParam).subscribe(res => {
        res.forEach( x => {
          this.card = x;
        });
      });
    });
  }

  getAllWishes() {
    this.firebaseService.GetGuestBook().subscribe(x => {
      console.log(x);
    });
/*
    defaultfirestore.collection("guestbook").get().then(function (docs) {
      docs.forEach(doc => {
        var wishdata = doc.data();
        guestbook.guest_name = doc.data().guest_name;
        guestbook.guest_wishes = doc.data().guest_wishes;
        appendWishes(guestbook);
      });
    });
    */
  }

  getFormData() {
    //var guest_name = document.getElementById('guest_name').value;
    //var guest_wishes = document.getElementById('guest_wishes').value;

    //this.guestBook.guest_name = guest_name;
    //this.guestBook.guest_wishes = guest_wishes;

    this.addWishes(this.guestBook);
    this.appendWishes(this.guestBook);
    //document.getElementById('wish-button').disabled = true;
    document.getElementById('wish-button').innerText = 'Thank You For Your Wishes';
  }

  addWishes(guestbook) {
    this.firebaseService.CreateGuestBook(guestbook);
  }

  appendWishes(guestbook) {
    var innerHtml = '<div class="item"><div class="guestbook"><p class="comment-body">' + guestbook
      .guest_wishes + '</p><p class="comment-name">' + guestbook.guest_name + '</p></div></div>';

    //$('.slick-carousel').slick('slickAdd', innerHtml);
  }

}
