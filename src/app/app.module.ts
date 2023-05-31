import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MpenduloComponent } from './components/mpendulo/mpendulo.component';
import { TitleComponent } from './components/title/title.component';
import { LebohangComponent } from './components/lebohang/lebohang.component';

@NgModule({
  declarations: [
    AppComponent,
    MpenduloComponent,
    TitleComponent,
    LebohangComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
