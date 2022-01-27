import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `
        <h1>{{ titulo }}</h1>

        <h3>La base es <strong>{{base}}</strong></h3>

        <button (click)="sumar(base)"> + {{base}} </button>
        <span>{{ valorAcumulador }}</span>
        <button (click)="restar(base)"> - {{base}} </button>
    `

})
export class ContadorComponent{
    titulo:string           = 'Contador App';
    valorAcumulador: number = 0;
    base:number             = 4;
  
  
    sumar(valor:number):void{
      this.valorAcumulador += valor;
    }
  
    restar(valor:number):void{
      this.valorAcumulador -= valor;
    }
}