import { Component, Input, OnInit } from '@angular/core';
import { Article } from './article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @Input() article:Article;

  constructor() {
    //this.article=new Article("Angluar","http://angluar.io",10);

   }

  ngOnInit(){
  }

  voteup():boolean {
    this.article.voteup();
    return false;
  }

  votedown():boolean {
    this.article.votedown();
    return false;
  }

}
