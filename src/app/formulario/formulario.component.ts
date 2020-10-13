import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  mostrarForm:boolean = false;


  constructor() { }

  ngOnInit(): void {
  }

  ActivarForm(){
    this.mostrarForm =! this.mostrarForm;
  }

}
