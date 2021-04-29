import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Defis } from 'src/environments/Defis';

@Injectable({
  providedIn: 'root'
})
export class DefisService {

  constructor(private http: HttpClient) { }

  url = "http://localhost:5000/api/defis/";
  getDefis(): Observable<Defis[]> {
    return this.http.get<Defis[]>(this.url);
  }
  getDefiByIdDefi(IdDefi: string): Observable<Defis> {
    
    return this.http.get<Defis>(this.url+IdDefi);
  }

  updateDefi(defi:Defis) : Observable<Defis> {
    return this.http.put<Defis>(this.url+defi.id,defi);
  }



  creationDefi(defi: Defis): Observable<Defis> {

 
    return this.http.post<Defis>(this.url+defi.id,defi);
  }

  deleteDefi(defi:Defis) : Observable<void> {
    return this.http.delete<void>(this.url+defi.id);
  }


  



}
