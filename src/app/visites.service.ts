import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Visite } from 'src/environments/Visites';

@Injectable({
  providedIn: 'root'
})
export class VisitesService {

  constructor(private http: HttpClient) { }


  url = "yyyyyyyy";
  getVisites(): Observable<Visite[]> {
    return this.http.get<Visite[]>(this.url);
  }
  getVisiteById(Id: string): Observable<Visite> {
    let params = new HttpParams();
    params.set("id", Id);
    return this.http.get<Visite>(this.url+"?Id="+Id);
  }



}
