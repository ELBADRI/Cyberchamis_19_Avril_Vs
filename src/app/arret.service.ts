import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Arret } from 'src/environments/Arret';

@Injectable({
  providedIn: 'root'
})
export class ArretService {
private url="yyy";
  constructor(private http: HttpClient) { }

  getArretByCode(codearret: string): Observable<Arret> {
    let params = new HttpParams();
    params.set("codearret", codearret);
    return this.http.get<Arret>(this.url+"?codearret="+codearret);
  }

  getArrets(): Observable<Arret[]> {
    return this.http.get<Arret[]>(this.url);
  }

}
