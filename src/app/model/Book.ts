export class Book{
  public bookId:string = "";
  public price :number;
  public title :string;
  public isbn:string;
  public category:string;
  public authorId:number;
  public authorName:string;
  public updateDate:Date;

constructor(price:number, title:string, isbn:string, category:string , authorId:number , authorName:string , updateDate:Date){
  this.price = price;
  this.title= title;
  this.isbn= isbn;
  this.category= category;
  this.authorId= authorId;
  this.authorName= authorName;
  this.updateDate= updateDate;
}

}
