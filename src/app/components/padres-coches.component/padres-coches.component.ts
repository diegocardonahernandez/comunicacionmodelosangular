import { Component } from '@angular/core';
import { Coche } from '../../models/coche';
@Component({
  selector: 'app-padres-coches.component',
  standalone: false,
  templateUrl: './padres-coches.component.html',
  styleUrl: './padres-coches.component.css',
})
export class PadresCochesComponent {

  public cochesArray: Array<Coche>


  constructor(){
    this.cochesArray = [
      new Coche("Lambo", "i8", 300,50,false),
      new Coche("ibiza", "Seat", 100,30,false),
      new Coche("GT", "III", 400,75,false)
    ]
  }

}
