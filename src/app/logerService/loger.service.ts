import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LogerService {
  loger(action: string, name: string) {
    console.log(`${action} : ${name}`);
  }
}
