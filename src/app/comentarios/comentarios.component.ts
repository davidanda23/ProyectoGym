import { Component, OnInit } from '@angular/core';
//import swal from 'sweetalert';
import { ComentariosService} from './comentarios.service';


@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.scss']
})
export class ComentariosComponent  {

  constructor(public _MessageService: ComentariosService) {
  }
   contactForm(form) {
   this._MessageService.sendMessage(form).subscribe(() => {
   //swal("Formulario de contacto", "Mensaje enviado correctamente", "success");
   });
   }
}
