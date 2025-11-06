import { Component } from '@angular/core';

@Component({
  selector: 'app-padre-deportes.component',
  standalone: false,
  templateUrl: './padre-deportes.component.html',
  styleUrl: './padre-deportes.component.css',
})
export class PadreDeportesComponent {

  public deportes: Array<string>
  public mensaje: string

  seleccionarFavorito(event: any): void{
    this.mensaje = "Tu deporte favorito es " + event
  }

  constructor(){
    this.mensaje = ""
    this.deportes = ["Fútbol", "Basket", "Beisbol", "Natación", "Dados"]
  }

}
