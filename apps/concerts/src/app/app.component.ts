import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Concert } from './concert';

@Component({
  selector: 'concerts-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  private concertsUrl = './assets/concerts.json';

  concerts : Concert [];

  constructor (private httpService: HttpClient) {}

  ngOnInit() {
    this.httpService.get(this.concertsUrl)
      .subscribe(
        data => {
          this.concerts = data["concerts"] as Concert [];
          console.log(this.concerts[1]);
        },
        (err: HttpErrorResponse) => {
          console.log (err.message);
        }
      );

  }

}
