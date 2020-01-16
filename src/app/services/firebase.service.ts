import { Injectable } from '@angular/core';
import { AngularFireModule, FirebaseFirestore } from '@angular/fire';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Card } from '../models/card';
import { User } from '../models/user';
import { map, take } from 'rxjs/operators';
import { GuestBook } from '../models/guestbook';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  public cardCollection: AngularFirestoreCollection<Card>;
  public userCollection: AngularFirestoreCollection<User>;
  public guestbookCollection: AngularFirestoreCollection<GuestBook>;

  constructor(
    private af: AngularFirestore) {
    this.cardCollection = this.af.collection('cards');
    this.userCollection = this.af.collection('users');
    this.guestbookCollection = this.af.collection('guestbook');
  }

  public GetCards() {
    return this.af.collection<Card>('cards').snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const Id = a.payload.doc.id;
          return { Id, ...data };
        });
      })
    );
  }

  public GetCard( card: Card ) {
    return this.af.collection<Card>('cards', ref => ref.orderBy('CardName').startAt(card.CardName)).snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const Id = a.payload.doc.id;
          return { Id, ...data };
        });
      })
    );
  }

  public GetGuestBook() {
    return this.guestbookCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const Id = a.payload.doc.id;
          return { Id, ...data };
        });
      })
    );
  }

  public GetUsers() {
    return this.userCollection;
  }

  public CreateCard( card: Card ) {
    this.cardCollection.add( card );
  }

  public CreateUser( user: User ) {
    this.userCollection.add( user );
  }

  public CreateGuestBook( guestBook: GuestBook ) {
    this.guestbookCollection.add( guestBook );
  }

  public RemoveCard( card: Card ) {
    this.cardCollection.doc( card.Id ).delete();
  }

  public UpdateCard( card: Card ) {
    this.cardCollection.doc( card.Id ).update( card );
  }

  public UpdateUser( user: User ) {
    this.userCollection.doc( user.Id ).update( user );
  }
}
