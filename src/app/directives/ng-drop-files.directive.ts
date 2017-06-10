import { Directive, EventEmitter, ElementRef, HostListener, Input, Output } from '@angular/core';

import { FileItem } from './file-item';

@Directive({
  selector: '[appNgDropFiles]'
})
export class NgDropFilesDirective {

  @Input() archivos: FileItem[] = [];
  @Output() archivoSobre: EventEmitter<any> = new EventEmitter();

  constructor(public Elemento: ElementRef) {}

  @HostListener('dragenter',['$event'])
  public ondragenter( event: any ) {
    this.archivoSobre.emit( true );
  }

  @HostListener('dragleave',['$event'])
  public ondragleave( event: any ) {
    this.archivoSobre.emit( false );
  }

  @HostListener('dragover',['$event'])
  public ondragover( event: any ) {
    let tranferencia = this._getTransferencia(event);
    tranferencia.dropEffect = 'copy';
    this.entraySale(event);
    this.archivoSobre.emit( true );
  }

  @HostListener('drop',['$event'])
  public ondrop( event: any ) {
    let tranferencia = this._getTransferencia(event);

    if (!tranferencia){
      return;
    }
    this._agregarArchivos(tranferencia.files);
    this.archivoSobre.emit( false );
    this.entraySale(event);
  }

  private _getTransferencia( event: any) {
    // console.log(event);
    return event.dataTransfer ? event.dataTransfer : event.originalEvent.dataTransfer;
  }

  private _agregarArchivos(archivoLista: FileList) {
    // console.log(archivoLista);
    // tslint:disable-next-line:forin
    for (let propiedad in Object.getOwnPropertyNames(archivoLista)) {
      let archTemp = archivoLista[propiedad];
      if (this.archivoPuedeSerCargado(archTemp)) {
        let nuevoArchivo = new FileItem(archTemp);
        this.archivos.push(nuevoArchivo);
      }
    }
    console.log(this.archivos);
  }

  private entraySale( event: any ) {
    event.preventDefault();
    event.stopPropagation();
  }

  private archivoPuedeSerCargado(archivo: File) {
    if ( !this._archivoYaFueDropeado(archivo.name) && this.esImagen(archivo.type) ) {
      return true;
    }
    return false;
  }

  private _archivoYaFueDropeado(nombreArchivo: string): boolean {
    // tslint:disable-next-line:forin
    for (let i in this.archivos) {
      let arc = this.archivos[i];

      if (arc.archivo.name == nombreArchivo) {
        console.log('Archivo ya existe', nombreArchivo);
        return true;
      }
    }
    return false;
  }

  private esImagen(tipoArchivo: string): boolean {
    return (tipoArchivo == '' || tipoArchivo == undefined) ? false : tipoArchivo.startsWith('image');
  }

}
