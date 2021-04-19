import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/environments/User';

@Injectable({
  providedIn: 'root'
})
export class TestServerService {
private _url:string="/assets/testServer.json";
  constructor( private httpClient: HttpClient) { }

getChamis1():Observable<User[]>{

return this.httpClient.get<User[]>(this._url);

}

/*getusers(){
return ["user","user2"]

;}*/
 

}
