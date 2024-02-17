// ANGULAR
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// MODELS
import { Dolar } from '../models/dolar.models';
// LIBRERIAS
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DolarService {
  private apiUrl = 'https://dolarapi.com/v1/dolares';

  constructor(private http: HttpClient) {}

  obtenerDolares(): Observable<any> {
    return this.http.get<Dolar>(this.apiUrl, {});
  }
}
