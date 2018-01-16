import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TesteComponent } from './teste/teste.component';
import { DiretivaNgifComponent } from './diretiva-ngif/diretiva-ngif.component';


@NgModule({
  declarations: [
    AppComponent,
    TesteComponent,
    DiretivaNgifComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
