import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import {DataApiService} from '../../services/data-api.service';
=======
<<<<<<< HEAD
import {DataApiService} from '../../services/data-api.service';
=======
>>>>>>> 109815b27124bb46d4c0b64eb1da8147e9f5fd1e
>>>>>>> 25b39681f4a3bbce1c1eceb563ebefd002298ac4

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 25b39681f4a3bbce1c1eceb563ebefd002298ac4
export class ContactoComponent implements OnInit{

  constructor(private dataApi: DataApiService){}

  public books = [];
  public book = [];
<<<<<<< HEAD
=======
=======
export class ContactoComponent {

>>>>>>> 109815b27124bb46d4c0b64eb1da8147e9f5fd1e
>>>>>>> 25b39681f4a3bbce1c1eceb563ebefd002298ac4
  
  title = 'app';
  elementType = 'url';
  value = '';

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 25b39681f4a3bbce1c1eceb563ebefd002298ac4
    ngOnInit(){
      this.dataApi.getAllBooks().subscribe(books => {
        console.log(books[1].facebook)

      } )
    }


<<<<<<< HEAD
=======
=======
>>>>>>> 109815b27124bb46d4c0b64eb1da8147e9f5fd1e
>>>>>>> 25b39681f4a3bbce1c1eceb563ebefd002298ac4
  entregarQRCode(index:number){
    switch(index){
      
      case 1:{
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 25b39681f4a3bbce1c1eceb563ebefd002298ac4
        this.dataApi.getAllBooks().subscribe(books => {
          this.value=books[0].twitter;
        })
        
<<<<<<< HEAD
=======
=======
        this.value='https://twitter.com/Schwarzenegger';
>>>>>>> 109815b27124bb46d4c0b64eb1da8147e9f5fd1e
>>>>>>> 25b39681f4a3bbce1c1eceb563ebefd002298ac4
        break; 
      }
        
      case 2:{
<<<<<<< HEAD
        this.dataApi.getAllBooks().subscribe(books => {
          this.value=books[0].youtube;
        })
=======
<<<<<<< HEAD
        this.dataApi.getAllBooks().subscribe(books => {
          this.value=books[0].youtube;
        })
=======
        this.value='https://www.youtube.com/user/arnoldclassicbra?app=desktop';
>>>>>>> 109815b27124bb46d4c0b64eb1da8147e9f5fd1e
>>>>>>> 25b39681f4a3bbce1c1eceb563ebefd002298ac4
        break;
      }
         
      case 3:{
<<<<<<< HEAD
        this.dataApi.getAllBooks().subscribe(books => {
          this.value=books[0].facebook;
        })
=======
<<<<<<< HEAD
        this.dataApi.getAllBooks().subscribe(books => {
          this.value=books[0].facebook;
        })
=======
        this.value='https://www.facebook.com/arnold';
>>>>>>> 109815b27124bb46d4c0b64eb1da8147e9f5fd1e
>>>>>>> 25b39681f4a3bbce1c1eceb563ebefd002298ac4
        break;
      }
         
      case 4:
<<<<<<< HEAD
        this.dataApi.getAllBooks().subscribe(books => {
          this.value=books[1].twitter;
        })
=======
<<<<<<< HEAD
        this.dataApi.getAllBooks().subscribe(books => {
          this.value=books[1].twitter;
        })
=======
        this.value='https://twitter.com/IvanDrago2020';
>>>>>>> 109815b27124bb46d4c0b64eb1da8147e9f5fd1e
>>>>>>> 25b39681f4a3bbce1c1eceb563ebefd002298ac4
        break; 
      

      case 5:
<<<<<<< HEAD
        this.dataApi.getAllBooks().subscribe(books => {
          this.value=books[1].facebook;
        })
=======
<<<<<<< HEAD
        this.dataApi.getAllBooks().subscribe(books => {
          this.value=books[1].facebook;
        })
=======
        this.value='https://www.facebook.com/public/Ivan-Drago';
>>>>>>> 109815b27124bb46d4c0b64eb1da8147e9f5fd1e
>>>>>>> 25b39681f4a3bbce1c1eceb563ebefd002298ac4
        break; 
      

      case 6:
<<<<<<< HEAD
        this.dataApi.getAllBooks().subscribe(books => {
          this.value=books[1].youtube;
        })
=======
<<<<<<< HEAD
        this.dataApi.getAllBooks().subscribe(books => {
          this.value=books[1].youtube;
        })
=======
        this.value='https://www.bing.com/videos/search?q=ivan+drago+youtube&ru=%2fsearch%3fq%3divan%2bdrago%2byoutube%26qs%3dn%26form%3dQBRE%26sp%3d-1%26pq%3divan%2bdrago%2byo%26sc%3d0-13%26sk%3d%26cvid%3dF363477832044772B5BA8D59ADCDEFB8&mmscn=vwrc&view=detail&mid=370771AD67E94EAC3DAB370771AD67E94EAC3DAB&rvsmid=01C9CE474E28ACF00CC501C9CE474E28ACF00CC5&FORM=VDQVAP';
>>>>>>> 109815b27124bb46d4c0b64eb1da8147e9f5fd1e
>>>>>>> 25b39681f4a3bbce1c1eceb563ebefd002298ac4
        break; 
      

      case 7:
<<<<<<< HEAD
        this.dataApi.getAllBooks().subscribe(books => {
          this.value=books[2].twitter;
        })
=======
<<<<<<< HEAD
        this.dataApi.getAllBooks().subscribe(books => {
          this.value=books[2].twitter;
        })
=======
        this.value='https://www.youtube.com/user/arnoldclassicbra?app=desktop';
>>>>>>> 109815b27124bb46d4c0b64eb1da8147e9f5fd1e
>>>>>>> 25b39681f4a3bbce1c1eceb563ebefd002298ac4
        break; 
      

      case 8:
<<<<<<< HEAD
        this.dataApi.getAllBooks().subscribe(books => {
          this.value=books[2].youtube;
        })
=======
<<<<<<< HEAD
        this.dataApi.getAllBooks().subscribe(books => {
          this.value=books[2].youtube;
        })
=======
        this.value='https://www.youtube.com/user/arnoldclassicbra?app=desktop';
>>>>>>> 109815b27124bb46d4c0b64eb1da8147e9f5fd1e
>>>>>>> 25b39681f4a3bbce1c1eceb563ebefd002298ac4
        break; 
      

      case 9:
<<<<<<< HEAD
        this.dataApi.getAllBooks().subscribe(books => {
          this.value=books[2].facebook;
        })
=======
<<<<<<< HEAD
        this.dataApi.getAllBooks().subscribe(books => {
          this.value=books[2].facebook;
        })
=======
        this.value='https://www.youtube.com/user/arnoldclassicbra?app=desktop';
>>>>>>> 109815b27124bb46d4c0b64eb1da8147e9f5fd1e
>>>>>>> 25b39681f4a3bbce1c1eceb563ebefd002298ac4
        break; 
      

      
    }

<<<<<<< HEAD
    

=======
<<<<<<< HEAD
    

=======
>>>>>>> 109815b27124bb46d4c0b64eb1da8147e9f5fd1e
>>>>>>> 25b39681f4a3bbce1c1eceb563ebefd002298ac4
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
