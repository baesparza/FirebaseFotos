import { Component } from '@angular/core';

import { CargaimagenesService } from './../../services/cargaimagenes.service';

import { FileItem } from './../../directives/file-item';

@Component({
  selector: 'app-carga',
  templateUrl: './carga.component.html',
  styles: []
})
export class CargaComponent {

  estaSobreDropzone: boolean = false;
  permiteCargar: boolean = true;

  archivos: FileItem[] = [];

  constructor(public _cargaimagenesService: CargaimagenesService) { }

  cargarFirebase () {
    this.permiteCargar = false;
    this._cargaimagenesService.uploadImagenes(this.archivos);
  }

  limpiarArchivos () {
    this.archivos = [];
    this.permiteCargar = true;
  }
}
