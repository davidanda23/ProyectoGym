import { Component, OnInit } from '@angular/core';
import {DataApiService} from '../../services/data-api.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit{

  constructor(private dataApi: DataApiService){}

  public books = [];
  public book = [];
  
  title = 'app';
  elementType = 'url';
  value = '';

    ngOnInit(){
      this.dataApi.getAllBooks().subscribe(books => {
        console.log(books[1].facebook)

      } )
    }


  entregarQRCode(index:number){
    switch(index){
      
      case 1:{
        this.dataApi.getAllBooks().subscribe(books => {
          this.value=books[0].twitter;
        })
        
        break; 
      }
        
      case 2:{
        this.dataApi.getAllBooks().subscribe(books => {
          this.value=books[0].youtube;
        })
        break;
      }
         
      case 3:{
        this.dataApi.getAllBooks().subscribe(books => {
          this.value=books[0].facebook;
        })
        break;
      }
         
      case 4:
        this.dataApi.getAllBooks().subscribe(books => {
          this.value=books[1].twitter;
        })
        break; 
      

      case 5:
        this.dataApi.getAllBooks().subscribe(books => {
          this.value=books[1].facebook;
        })
        break; 
      

      case 6:
        this.dataApi.getAllBooks().subscribe(books => {
          this.value=books[1].youtube;
        })
        break; 
      

      case 7:
        this.dataApi.getAllBooks().subscribe(books => {
          this.value=books[2].twitter;
        })
        break; 
      

      case 8:
        this.dataApi.getAllBooks().subscribe(books => {
          this.value=books[2].youtube;
        })
        break; 
      

      case 9:
        this.dataApi.getAllBooks().subscribe(books => {
          this.value=books[2].facebook;
        })
        break; 
      

      
    }

    

    /*if(index === 1){
      this.value='https://www.youtube.com/watch?v=8E74q6HzReQ';
    }
    if(index === 2){
      this.value='https://mail.google.com/mail/u/0/#inbox/FMfcgxwJWXStMbBqCHkfptGBbcvZttFB';
    }
    if(index === 3){
      this.value='https://www.facebook.com/arnold';
    }*/
  }
}
