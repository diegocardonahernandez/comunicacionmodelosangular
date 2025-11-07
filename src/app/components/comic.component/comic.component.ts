import { Component, Input, Output, EventEmitter, output, input } from '@angular/core';
import { Comic } from '../../models/comic';

@Component({
  selector: 'app-comic-component',
  standalone: false,
  templateUrl: './comic.component.html',
  styleUrl: './comic.component.css',
})
export class ComicComponent {
  @Input() comic!: Comic
  @Input() index!: number
  @Output() seleccionarFavorito: EventEmitter<any> = new EventEmitter<any>()
  @Output() deleteComic: EventEmitter<any> = new EventEmitter<any>()

  eliminarComic(): void {
    this.deleteComic.emit(this.comic)
  }

  marcarFavorito():void{
    this.seleccionarFavorito.emit(this.comic)
  }
}
