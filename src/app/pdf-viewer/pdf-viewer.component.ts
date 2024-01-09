import { Component, OnInit } from '@angular/core';
import { PdfFileService } from '../pdf-file.service';
import { DomSanitizer } from '@angular/platform-browser';
import { from } from 'rxjs';
@Component({
  selector: 'app-pdf-viewer',
  template: `
    <input type="file" (change)="onFileSelected($event)" />
  `,
})
export class PdfViewerComponent implements OnInit{
  pdfSrc: any;
  myString = 'Hello, RxJS!';
  observableFromString = from(this.myString);

  constructor(private pdfFileService: PdfFileService,
    private sanitizer: DomSanitizer) {}
  
  ngOnInit(): void {
    this.initialize();
  }

  initialize()
  {
    this.observableFromString.subscribe(char => {
      console.log(char); // Output: 'H', 'e', 'l', 'l', 'o', ',', ' ', 'R', 'x', 'J', 'S', '!'
    });
  }  

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


