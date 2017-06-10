import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

// Router
import { ROUTER } from './app.routes';

// Configuracion
import { firebaseConfig } from './../config/firebase.config';

// Services
import { CargaimagenesService } from './services/cargaimagenes.service';

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
    ROUTER,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [
    CargaimagenesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
