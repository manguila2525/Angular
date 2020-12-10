import { Component, OnInit } from '@angular/core';
import { Articles } from '../cards/articles.js'

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html'

})
export class FormularioComponent implements OnInit {
  title: string = ""
  description: string = ""
  article = []
  constructor() {
    this.article = Articles
  }

  comment() {
    this.article.push({
      title: this.title,
      description: this.description
    })
    this.title = ""
    this.description = ""
    console.log(this.article)
  }

  ngOnInit(): void {
  }

}
