import { Component, OnInit } from '@angular/core';
import { Articles } from './articles.js'


@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html'
})
export class CardsComponent implements OnInit {

  article = []

  constructor() {
    this.article = Articles
  }

  message(m) {
    console.log(m)
  }

  deleteNote(ar) {
    this.article.filter(item => {
      item.id !== ar.id
      console.log(ar)
    })

  }

  ngOnInit(): void {
  }

}
