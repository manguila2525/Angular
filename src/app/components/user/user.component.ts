import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  isLogged: boolean = false
  public level: number;
  constructor() {
    this.level = 5
  }


}
