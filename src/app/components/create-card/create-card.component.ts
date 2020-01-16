import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
import { Card } from 'src/app/models/card';
import { FormGroup, FormControl } from '@angular/forms';
import { MatFormField, MatFormFieldControl } from '@angular/material';

@Component({
  selector: 'app-create-card',
  templateUrl: './create-card.component.html',
  styleUrls: ['./create-card.component.scss']
})
export class CreateCardComponent implements OnInit {

  private card: Card;

  cardForm = new FormGroup({
    CardName: new FormControl(''),
    ShortNameMale: new FormControl(''),
    ShortNameFemale: new FormControl(''),
    FullNameMale: new FormControl(''),
    FullNameFemale: new FormControl(''),
    FatherName: new FormControl(''),
    MotherName: new FormControl(''),
    EventDate: new FormControl('')
  });


  constructor(
    private firebaseService: FirebaseService
  ) { }

  ngOnInit() {
  }

  createCard( value ) {
    console.log(value);
    console.log(this.card);
    this.firebaseService.CreateCard( value );
  }
}
