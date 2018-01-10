import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {MeuPrimeiroComponent} from './meu-primeiro/meu-primeiro.component';
import { MeuPrimeiroAngularcliComponent } from './meu-primeiro-angularcli/meu-primeiro-angularcli.component';
import { CursosModule } from './cursos/cursos.module';

@NgModule({
    declarations: [
        AppComponent,
        MeuPrimeiroComponent,
        MeuPrimeiroAngularcliComponent
    ],
    imports: [
        BrowserModule,
        CursosModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }