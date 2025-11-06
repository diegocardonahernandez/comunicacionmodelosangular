import { Routes, RouterModule } from '@angular/router'
import { Component, ModuleWithProviders } from "@angular/core";
import {ListaProductosComponent} from './components/lista-productos-component/lista-productos-component'
import { PadresCochesComponent } from './components/padres-coches.component/padres-coches.component';
import { PadreDeportesComponent } from './components/padre-deportes.component/padre-deportes.component';
import { LibreriaComponent } from './components/libreria.component/libreria.component';

const appRoutes = [
    {path: "", component: ListaProductosComponent},
    {path: "coches", component: PadresCochesComponent},
    {path: "padredeportes", component: PadreDeportesComponent},
    {path: "libreria", component: LibreriaComponent}
]

export const appRoutingProvider: any[] = []
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes)