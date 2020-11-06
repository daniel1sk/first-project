import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-secret',
  templateUrl: './secret.component.html',
  styleUrls: ['./secret.component.css']
})
export class SecretComponent implements OnInit {

  showSecret = true;
  clicks = [];

  toggleSecret () {
    this.showSecret=!this.showSecret;
  }

  countClick () {
    this.clicks.push(Date.now())
  }

  constructor() { }

  ngOnInit(): void {
  }

}
