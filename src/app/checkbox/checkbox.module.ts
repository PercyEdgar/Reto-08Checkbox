import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginaComponent } from './pagina/pagina.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PaginaComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    PaginaComponent
  ]
})
export class CheckboxModule { }
