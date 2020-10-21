import { Component, OnInit } from '@angular/core';
import { state, style, trigger, transition, animate } from '@angular/animations';
import { ArticuloAtraccion, ArticulosAtracciones } from '../articuloAtracciones/Articulo';

@Component({
  selector: 'app-atracciones',
  templateUrl: './atracciones.component.html',
  styleUrls: ['./atracciones.component.css'],
  /* animations: [
    trigger('animacion', [
                    state('estado1',style({ height: '*',
                                            opacity:0.9})),
                    state('estado2',style({ opacity:1})),
                    transition('estado1 => estado2', animate('0.1s')),
                    transition('estado2 => estado1', animate('0.1s'))
    ])
  ] */

})
export class AtraccionesComponent implements OnInit {

 /*  estado='estado1'; */
  items = ArticulosAtracciones;
   
  constructor() { }

  ngOnInit(): void {
  }

 /*  mostrar(){
    this.estado = this.estado === 'estado1' ? 'estado2' : 'estado1';
    console.log("entro en mostrar")
  } */

}
