import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Materiel } from 'src/environments/Materiel';

@Injectable({
  providedIn: 'root'
})
export class MaterielService {

  constructor(private http: HttpClient) { }

  url = "yy";
  getMateriels(): Observable<Materiel[]> {
    return this.http.get<Materiel[]>(this.url);
  }
  getMaterielById(Id: string): Observable<Materiel> {
    let params = new HttpParams();
    params.set("Id", Id);
    return this.http.get<Materiel>(this.url+"?Id="+Id);
  }

  updateMateriel(materiel:Materiel) : Observable<Materiel> {
    return this.http.put<Materiel>(this.url,materiel);
  }



  
}
