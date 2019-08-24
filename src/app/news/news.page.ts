import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
  private caminho: string;
  private title: string;

  constructor() {
    this.title = "News page title";
    this.caminho = "./assets/icon/favicon.png";
   }

  ngOnInit() {
  }

}
