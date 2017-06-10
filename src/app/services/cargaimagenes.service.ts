import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { FileItem } from './../directives/file-item';

import * as firebase from 'firebase';

@Injectable()
export class CargaimagenesService {

  private Carpeta_Imagenes: string = 'img';

  constructor(public _angularFireDatabase: AngularFireDatabase) { }

  listaUltimasImagenes (maxImg: number): FirebaseListObservable<any[]> {

    return this._angularFireDatabase.list(`/${ this.Carpeta_Imagenes }`, {
      query: {
        limitToLast: maxImg
      }
    });
  }

  uploadImagenes (archivos: FileItem[]) {

    console.log(archivos);

  }

  private guardarimagen (imagen: any) {

    this._angularFireDatabase.list(`/${ this.Carpeta_Imagenes }`).push(imagen);

  }

}
