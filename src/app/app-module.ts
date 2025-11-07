import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing, appRoutingProvider } from './app.routing';
import { FormsModule } from '@angular/forms';

import { App } from './app';
import { MenuComponent } from './components/menu-component/menu-component';
import { HijoCocheComponent } from './components/hijocoche-component/hijocoche-component';
import { PadresCochesComponent } from './components/padres-coches.component/padres-coches.component';
import { PadreDeportesComponent } from './components/padre-deportes.component/padre-deportes.component';
import { HijoDeportesComponent } from './components/hijo-deportes.component/hijo-deportes.component';
import { ComicComponent } from './components/comic.component/comic.component';
import { LibreriaComponent } from './components/libreria.component/libreria.component';
import { ServiceComics } from './services/service.comics';
import { provideHttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    App,
    MenuComponent,
    HijoCocheComponent,
    PadresCochesComponent,
    PadreDeportesComponent,
    HijoDeportesComponent,
    ComicComponent,
    LibreriaComponent
  ],
  imports: [
    BrowserModule, routing, FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    appRoutingProvider,
    ServiceComics,
    provideHttpClient()
  ],
  bootstrap: [App]
})
export class AppModule { }
