import { MukosiComponent } from './components/mukosi/mukosi.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MpenduloComponent } from './components/mpendulo/mpendulo.component';
import { TitleComponent } from './components/title/title.component';
import { LebohangComponent } from './components/lebohang/lebohang.component';
import { MoniqueComponent } from './components/monique/monique.component';

@NgModule({
  declarations: [
    AppComponent,
    MpenduloComponent,
    TitleComponent,
    LebohangComponent,
    MoniqueComponent,
    MukosiComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
