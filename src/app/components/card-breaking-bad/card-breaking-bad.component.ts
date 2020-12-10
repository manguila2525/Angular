import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-card-breaking-bad',
  templateUrl: './card-breaking-bad.component.html'
})
export class CardBreakingBadComponent {

  constructor(private http: HttpClient) {
    this.http.get('https://www.breakingbadapi.com/api/characters').subscribe(data => console.log(data[0].name));
  }

  getJson(url: string) {
    return this.http.get(url)
  }


}
