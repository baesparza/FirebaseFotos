import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Router
import { ROUTER } from './app.routes';

import { AppComponent } from './app.component';
import { CargaComponent } from './components/carga/carga.component';
import { FotosComponent } from './components/fotos/fotos.component';

@NgModule({
  declarations: [
    AppComponent,
    CargaComponent,
    FotosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ROUTER
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
