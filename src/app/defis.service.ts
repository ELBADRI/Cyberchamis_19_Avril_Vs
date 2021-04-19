import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Defis } from 'src/environments/Defis';

@Injectable({
  providedIn: 'root'
})
export class DefisService {

  constructor(private http: HttpClient) { }

  url = "/api/defis";
  getDefis(): Observable<Defis[]> {
    return this.http.get<Defis[]>(this.url);
  }
  getDefiById(Id: string): Observable<Defis> {
    let params = new HttpParams();
    params.set("Id", Id);
    return this.http.get<Defis>(this.url+"?Id="+Id);
  }

  updateDefi(defi:Defis) : Observable<Defis> {
    return this.http.put<Defis>(this.url,defi);
  }


  



}
