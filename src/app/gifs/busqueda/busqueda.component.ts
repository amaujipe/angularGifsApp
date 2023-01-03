import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent {

  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>;

  constructor( private gifsService: GifsService ) {}

  buscar() {
    const palabraClave = this.txtBuscar.nativeElement.value;
    if( palabraClave.trim().length === 0 ) return;
    this.gifsService.buscarGifs( palabraClave );
    this.txtBuscar.nativeElement.value = '';
  }

}
