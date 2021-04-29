import { EventEmitter, Output } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';
import { Defis } from 'src/environments/Defis';
import { DefisService } from '../defis.service';

@Component({
  selector: 'app-defi-details',
  templateUrl: './defi-details.component.html',
  styleUrls: ['./defi-details.component.scss']
})
export class DefiDetailsComponent implements OnInit {
//je reçois le ID de défi ou le Defi complet de la vu precédent 
//@Input()
 defiId: string ="D151";
@Output() Page: EventEmitter<number> = new EventEmitter();

defi!:Defis;
/*public defi: Defis={ 
  id:"",
  titre :"",
  datedecreation : new Date() ,
  description :"",
  datedemodification : new Date() ,
  type  :"",
  auteur :"",
  arret :"",
  codearret :"",
  motscles  :"",
  duree :"",
  prologue :"",
  points :1,
  epilogue:"",
commentaires:"",};*/
  constructor(private defiserver:DefisService) { }


  ngOnInit(): void {

this.defiserver.getDefiByIdDefi(this.defiId).subscribe((data=>{this.defi=data;console.log(this.defi)}
  
  
  ))

  }

  setPage(page:number){
this.Page.emit(page);

  }

}
