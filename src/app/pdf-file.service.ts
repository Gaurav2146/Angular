import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PdfFileService {
  readFileAsArrayBuffer(file: File): Observable<ArrayBuffer> {
    return new Observable((observer: Observer<ArrayBuffer>) => {
      const fileReader = new FileReader();

      fileReader.onload = () => {
        if (fileReader.result instanceof ArrayBuffer) {
          observer.next(fileReader.result);
          observer.complete();
        } else {
          observer.error('Error reading file as ArrayBuffer');
        }
      };

      fileReader.onerror = (error) => {
        observer.error(error);
      };

      fileReader.readAsArrayBuffer(file);
    });
  }
}