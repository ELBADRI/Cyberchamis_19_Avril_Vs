import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Indice } from 'src/environments/Indice';

@Injectable({
  providedIn: 'root'
})
export class IndiceService {

  constructor(private http: HttpClient) { }

  url = "yy";
  getIndices(): Observable<Indice[]> {
    return this.http.get<Indice[]>(this.url);
  }
  getIndicesById(Id: string): Observable<Indice[]> {
    let params = new HttpParams();
    params.set("Id", Id);
    return this.http.get<Indice[]>(this.url+"?Id="+Id);
  }

  updateIndice(indice:Indice) : Observable<Indice> {
    return this.http.put<Indice>(this.url,indice);
  }





}
