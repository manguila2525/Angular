import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-headers',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public name: string;
  public newName: string;
  public count: number;
  public persons: string[];
  constructor() {
    this.name = "Maikol"
    this.newName = ""
    this.count = 0
    console.log("Component header create")
  }

  changeName(newName = "Ruben") {
    this.name = newName
  }

  sumar() {
    this.count++
  }

  restar() {
    this.count--
  }

  addPerson() {
    this.persons.push("Daniela")
  }

  ngOnInit(): void {
    console.log("cual")
  }




}
