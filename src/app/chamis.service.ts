import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Chamis } from 'src/environments/Chamis';

@Injectable({
  providedIn: 'root'
})
export class ChamisService {

  constructor(private http: HttpClient) { }


  url = "xxxx";
  getChamis(): Observable<Chamis[]> {
    return this.http.get<Chamis[]>(this.url);
  }


  editChami(chamis:Chamis) : Observable<Chamis> {
    return this.http.put<Chamis>(this.url,chamis);
  }


  createChami(chamis:Chamis): Observable<Chamis> {


    
    
    return this.http.post<Chamis>(this.url,chamis );
  }


}
