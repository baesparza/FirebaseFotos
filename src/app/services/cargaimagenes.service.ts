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
    console.log('cargando', archivos);
    let storageRef = firebase.storage().ref();
    // tslint:disable-next-line:forin
    for (let item of archivos) {
      item.estadoUpload = true;
      let uploadTask: firebase.storage.UploadTask = storageRef
        .child(`${ this.Carpeta_Imagenes }/${ item.nombreArchivo }`)
        .put(item.archivo);
      uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
        (snapshot) => item.progreso = (snapshot.bytesTransferred / snapshot.totalBytes) * 100,
        (error) => console.error('Error al subir', error),
        () => {
          item.url = uploadTask.snapshot.downloadURL;
          item.estadoUpload = false;
          this.guardarimagen({nombre: item.nombreArchivo, url: item.url});
        }
        );
    }
  }

  private guardarimagen (imagen: any) {
    this._angularFireDatabase.list(`/${ this.Carpeta_Imagenes }`).push(imagen);
  }

}
