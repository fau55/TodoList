import { Pipe, PipeTransform } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Pipe({
  name: 'encriptPipe'
})
export class EncriptPipePipe implements PipeTransform {

  transform(value: string, secretKey: string): any {
    let encriptText=CryptoJS.AES.encrypt(value.toString(), secretKey).toString();
    let randonValue = encriptText.slice(10,25);
    return randonValue;
  }
}
