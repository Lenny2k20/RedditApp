import { Component } from '@angular/core';
import { Article } from './article/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articles:Article[];

  constructor(){
    this.articles=[
      new Article("Angular","http://angluar.io",5),
      new Article("Google","http://google.ie",3),
      new Article("TikTok","http://tiktok.com",1)
    ]
  }
  addArticle(title:HTMLInputElement, link:HTMLInputElement):Boolean {
    console.log(`Adding Article Title $(title.value); and adding article link $(link.value);`);
    return false;
  }
}
