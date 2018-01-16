import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DirectiveNgifComponent } from './directive-ngif/directive-ngif.component';
import { DirectiveNgswitchComponent } from './directive-ngswitch/directive-ngswitch.component';
import { DirectiveNgForComponent } from './directive-ng-for/directive-ng-for.component';


@NgModule({
  declarations: [
    AppComponent,
    DirectiveNgifComponent,
    DirectiveNgswitchComponent,
    DirectiveNgForComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
