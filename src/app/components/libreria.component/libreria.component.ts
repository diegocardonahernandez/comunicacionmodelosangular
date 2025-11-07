import { Component, ViewChild, ElementRef, viewChild } from '@angular/core';
import { OnInit } from '@angular/core';
import { Comic } from '../../models/comic';
import { ServiceComics } from '../../services/service.comics';

@Component({
  selector: 'app-libreria.component',
  standalone: false,
  templateUrl: './libreria.component.html',
  styleUrl: './libreria.component.css',
  //Aquí debemos declarar el servicio para poder recuperarlo dentro dentro de un constructor
})
export class LibreriaComponent implements OnInit {

  @ViewChild("cajatitulo") cajaTitulo!: ElementRef;
  @ViewChild("cajadescripcion") cajaDescripcion!: ElementRef;
  @ViewChild("cajaimagen") cajaImagen!: ElementRef;

  public comics!: Array<Comic>;
  public comicFavorito!: Comic

  constructor(private _service: ServiceComics) { }

  ngOnInit(): void {
    this.comics = this._service.getComics()
  }

  seleccionarFavorito(favorito: Comic): void {
    this.comicFavorito = favorito
  }

  deleteComic(index: number): void {
    this.comics.splice(index, 1)
  }

  createComic(): void {
    let titulo = this.cajaTitulo.nativeElement.value
    let descripcion = this.cajaDescripcion.nativeElement.value
    let imagen = this.cajaImagen.nativeElement.value
    let comicNew = new Comic(titulo, descripcion, imagen)
    this.comics.push(comicNew)
    console.log(comicNew)
  }
}
