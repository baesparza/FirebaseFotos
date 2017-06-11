import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';

import { CargaimagenesService } from './../../services/cargaimagenes.service';

@Component({
  selector: 'app-fotos',
  templateUrl: './fotos.component.html',
  styles: []
})
export class FotosComponent implements OnInit {

  images: FirebaseListObservable<any[]>;

  constructor(public _cargaimagenesService: CargaimagenesService) {
    this.images = this._cargaimagenesService.listaUltimasImagenes(10);
  }

  ngOnInit() {
  }

}
