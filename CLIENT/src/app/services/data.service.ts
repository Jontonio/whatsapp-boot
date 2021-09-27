import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  URL_BASE: string = 'http://localhost:8080/whatsapp'
  linkQR: string = '';
  constructor( private http: HttpClient) {}

  getQr(){
    this.http.get(`${this.URL_BASE}`)
        .subscribe(
          (res:any)   => {
            this.linkQR = res.whatsapp;
          },
          error => console.log(error)
        )
  }

}
