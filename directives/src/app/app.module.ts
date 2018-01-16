import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DirectiveNgifComponent } from './directive-ngif/directive-ngif.component';


@NgModule({
  declarations: [
    AppComponent,
    DirectiveNgifComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
