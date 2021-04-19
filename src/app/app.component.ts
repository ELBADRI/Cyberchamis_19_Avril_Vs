import { ChangeDetectionStrategy, Component, NgZone, OnInit, ViewChild } from '@angular/core';
import { OSM_TILE_LAYER_URL } from '@yaga/leaflet-ng2';
import { AngularFireAuth } from '@angular/fire/auth'; 

import firebase from 'firebase/app'; 
import { User } from 'src/environments/User';
import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { TestServerService } from './test-server.service';
import { ChamisComponent } from './chamis/chamis.component';
import { MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  /*@ViewChild(MatMenuTrigger) trigger: MatMenuTrigger ;
  someMethod() {
    this.trigger.openMenu();
  }*/
  u: any;
  public users:User[]=[];
  public names=["hana","jason","ibrahim"];

  dataIconGoogle = 'assets/images/iconGoogle.png';
  iconMarker = 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Map_marker.svg/585px-Map_marker.svg.png';
  tileLayerUrl = OSM_TILE_LAYER_URL;
  constructor(public auth: AngularFireAuth,   private db: AngularFirestore,  private httpClient: HttpClient, private testServer:TestServerService

    
    ){ 



      this.auth.user.subscribe(async (u:any) => {
        console.log("L’utilisateur Firebasse est ", u);
        console.log("L’utilisateur Firebasse est ", u.uid);
        console.log("Les users ", this.users);




        // On contacte le serveur métier pour l'informer si un nouvel utilisateur existe :
        if (u !== null) {
          const reponseServeur = await this.POST("", {
            userId: u.uid,
          }).catch((err) => {
            console.log(err);
          });
          console.log("Le serveur répond", reponseServeur);
        }
       });
    }
  ngOnInit(): void {
    /*this.testServer.getChamis().subscribe((x)=>this.users=x)
   // this.users = this.testServer.getusers();

    throw new Error('Method not implemented.');*/
  }

    

    POST(
      url: string,
      params: { [key: string]: string }
    ): Promise<HttpResponse<string>> {
      const P = new HttpParams({ fromObject: params });
      return this.httpClient
        .post(url, P, {
          observe: "response",
          responseType: "text",
          headers: { "content-type": "application/x-www-form-urlencoded" },
        })
        .toPromise();
    }

  



 login(): void { 

        const provider = new firebase.auth.GoogleAuthProvider(); 
    
        provider.setCustomParameters({ 
    
          prompt: 'select_account' 
    
        }); 
    
        this.auth.signInWithPopup(provider); 
    
      } 
    
      logout(): void { 
    
        this.auth.signOut(); 
    
      } 

   


   

}
