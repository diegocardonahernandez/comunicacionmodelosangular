import { Injectable } from "@angular/core";
import { Comic } from "../models/comic";

@Injectable()
export class ServiceComics {
    getComics(): any {
        let comics = new Array<Comic>()

        comics = [
            new Comic(
                "Spiderman",
                "Hombre araña",
                "https://images-na.ssl-images-amazon.com/images/I/61AYfL5069L.jpg"
            ),
            new Comic(
                "Wolverine",
                "Lobezno",
                "https://i.etsystatic.com/9340224/r/il/42f0e1/1667448004/il_570xN.1667448004_sqy0.jpg"
            ),
            new Comic(
                "Guardianes de la Galaxia",
                "Yo soy Groot",
                "https://upload.wikimedia.org/wikipedia/commons/d/df/C2E2_2016_Contest_-_Groot_%2834170224005%29.jpg"
            ),
            new Comic(
                "Avengers",
                "Los Vengadores",
                "https://d26lpennugtm8s.cloudfront.net/stores/057/977/products/ma_avengers_01_01-891178138c020318f315132687055371-640-0.jpg"
            ),
            new Comic(
                "Spawn",
                "Todd MacFarlane",
                "https://i.pinimg.com/originals/e1/d8/ff/e1d8ff4aeab5e567798635008fe98ee1.png"
            )
        ];
        return comics
    }
}