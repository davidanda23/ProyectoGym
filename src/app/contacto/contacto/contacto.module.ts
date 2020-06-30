import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactoComponent } from './contacto.component';
import { NgxQRCodeModule } from 'ngx-qrcode2';    
import { ContactoRoutingModule } from './contacto-routing-module';    

@NgModule({
  declarations: [ContactoComponent],
  imports: [
    CommonModule,
    NgxQRCodeModule,
    ContactoRoutingModule,
  ]
})
export class ContactoModule implements OnInit{

  ngOnInit(): void {
    console.log(this.seleccion);
    throw new Error("Method not implemented.");
  }

  title = 'app';
  elementType = 'url';
  value = '';
  seleccion = 0;

  entregarQRCode(index:number){
    console.log(index);

    

    

    /*switch(seleccion){
      
      case 1:{
        this.value='https://twitter.com/Schwarzenegger';
        break; 
      }
        
      case 2:{
        this.value='https://www.youtube.com/user/arnoldclassicbra?app=desktop';
        break;
      }
         
      case 3:{
        this.value='https://www.facebook.com/arnold';
        break;
      }
         
      case 4:
        this.value='https://twitter.com/IvanDrago2020';
        break; 
      

      case 5:
        this.value='https://www.facebook.com/public/Ivan-Drago';
        break; 
      

      case 6:
        this.value='https://www.bing.com/videos/search?q=ivan+drago+youtube&ru=%2fsearch%3fq%3divan%2bdrago%2byoutube%26qs%3dn%26form%3dQBRE%26sp%3d-1%26pq%3divan%2bdrago%2byo%26sc%3d0-13%26sk%3d%26cvid%3dF363477832044772B5BA8D59ADCDEFB8&mmscn=vwrc&view=detail&mid=370771AD67E94EAC3DAB370771AD67E94EAC3DAB&rvsmid=01C9CE474E28ACF00CC501C9CE474E28ACF00CC5&FORM=VDQVAP';
        break; 
      

      case 7:
        this.value='https://www.youtube.com/user/arnoldclassicbra?app=desktop';
        break; 
      

      case 8:
        this.value='https://www.youtube.com/user/arnoldclassicbra?app=desktop';
        break; 
      

      case 9:
        this.value='https://www.youtube.com/user/arnoldclassicbra?app=desktop';
        break; 
      

      
    }*/

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
