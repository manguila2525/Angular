import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parte4',
  templateUrl: './parte4.component.html',
  styleUrls: ['./parte4.component.css']
})
export class Parte4Component implements OnInit {
  public desactivado: boolean = true
  articles = []
  public titulo: string;
  constructor() {
  }

  ngOnInit(): void {
  }
  addArticle() {
    this.articles.push({
      nombre: this.titulo
    })
    console.log(this.articles)
    this.titulo = ""
  }
  changeState() {
    this.desactivado = !this.desactivado
  }
}
