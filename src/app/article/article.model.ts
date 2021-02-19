export class Article {
  votes:number;
  title:string;
  link:string;

  constructor(title:string, link:string, votes?:number) {
    this.title=title;
    this.link=link;
    this.votes=votes || 10;
   }

     voteup():boolean {
    this.votes ++;
    return false;
  }

  votedown():boolean {
    this.votes --;
    return false;
  }
}