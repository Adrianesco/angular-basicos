import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent {

  //@Input() personajes: Personaje[] = [];

  @Input() personajeNuevo:Personaje = {
    nombre: '',
    poder: 0
  }

  //El @Output sirve para emitir eventos, se indica el tipo de dato que va a emitir
  //@Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  constructor(private dbzService:DbzService){}
 
  agregar(){
    if( this.personajeNuevo.nombre.trim().length===0 ) { return; }
//    this.personajes.push( this.personajeNuevo );

    //console.log(this.personajeNuevo);
    //this.onNuevoPersonaje.emit(this.personajeNuevo); //

    this.dbzService.agregarPersonaje(this.personajeNuevo);

    this.personajeNuevo = {
      nombre: '',
      poder: 0
    }
    //console.log(this.personajes);
  }

}
