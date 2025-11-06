import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijo-deportes-component',
  standalone: false,
  templateUrl: './hijo-deportes.component.html',
  styleUrl: './hijo-deportes.component.css',
})
export class HijoDeportesComponent {

  @Input() sport!: string
  @Output() seleccionarFavoritoPadre: EventEmitter<any> = new EventEmitter()

  seleccionarFavoritoHijio(): void {
    this.seleccionarFavoritoPadre.emit(this.sport)
  }

}
