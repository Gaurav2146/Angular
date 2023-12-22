import { Component } from '@angular/core';
import { PdfFileService } from '../pdf-file.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-pdf-viewer',
  template: `
    <input type="file" (change)="onFileSelected($event)" />
  `,
})
export class PdfViewerComponent {
  pdfSrc: any;

  constructor(private pdfFileService: PdfFileService,
    private sanitizer: DomSanitizer) {}

  onFileSelected(event: any): void {
    const file = event.target.files[0];

    if (file) {
      this.pdfFileService.readFileAsArrayBuffer(file).subscribe(
        (arrayBuffer: ArrayBuffer) => {
          const uint8Array = new Uint8Array(arrayBuffer);
          console.log(uint8Array , "uint8Array");
        },
        (error: any) => {
          console.error('Error reading PDF file:', error);
        }
      );
    }
  }
}


