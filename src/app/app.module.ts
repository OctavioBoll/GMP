import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { CuerpoComponent } from './cuerpo/cuerpo.component';
import { MenuComponent } from './menu/menu.component';
import { AtraccionesComponent } from './atracciones/atracciones.component';

import { InicioComponent } from './inicio/inicio.component';
//import { FormularioComponent } from './formulario/formulario.component';
import { FormularioComponent } from './formulario/formulario.component';

@NgModule({
  declarations: [
    
    CuerpoComponent,
    MenuComponent,
    AtraccionesComponent,
    InicioComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [CuerpoComponent]
})
export class AppModule { }
