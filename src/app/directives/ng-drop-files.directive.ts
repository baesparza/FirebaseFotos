import { Directive, EventEmitter, ElementRef, HostListener, Input, Output } from '@angular/core';

import { FileItem } from './file-item';

@Directive({
  selector: '[appNgDropFiles]'
})
export class NgDropFilesDirective {

  @Input() archivo: FileItem[] = [];
  @Output() archivoSobre: EventEmitter<any> = new EventEmitter();

  constructor(public Elemento: ElementRef) {}

  @HostListener('dragenter',['event'])
  public ondragenter( event: any ) {
    this.archivoSobre.emit( true );
  }

  @HostListener('dragleave',['event'])
  public ondragleave( event: any ) {
    this.archivoSobre.emit( false );
  }

  @HostListener('dragover',['event'])
  public ondragover( event: any ) {
    this.archivoSobre.emit( true );
  }

}
