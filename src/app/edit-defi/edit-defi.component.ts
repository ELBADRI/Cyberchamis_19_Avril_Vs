import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Arret } from 'src/environments/Arret';
import { Defis } from 'src/environments/Defis';
import { ArretService } from '../arret.service';
import { DefisService } from '../defis.service';
import { FormGroup } from '@angular/forms';
import { QuestionService } from '../question.service';
import { Question } from 'src/environments/Question';
import { IndiceService } from '../indice.service';
import { Indice } from 'src/environments/Indice';


@Component({
  selector: 'app-edit-defi',
  templateUrl: './edit-defi.component.html',
  styleUrls: ['./edit-defi.component.scss']
})
export class EditDefiComponent implements OnInit {
  @Input() defiId: string ="";
  @Input() public parentData=0;
  @Output() Page: EventEmitter<number> = new EventEmitter();


  public defiedit: Defis={ 
    Id:"",
    Titre :"",
    Datedecreation : new Date() ,
    Description :"",
    Datedemodification : new Date() ,
    Type  :"",
    Auteur :"",
    Arret :"",
    Codearret :"",
    Motscles  :"",
    Duree :"",
    Prologue :"",
    Points :1,
    Epilogue:"",
commentaires:"",};
  public arrets:Arret[]=[];
  public questions:Question[]=[];
  public indices:Indice[]=[];



  

  constructor(private defiservice:DefisService,private arretservice:ArretService,private questionservice: QuestionService,private indiceservice:IndiceService) {}

  ngOnInit(): void {
    this.indiceservice.getIndicesById(this.defiId).subscribe((data3=>this.indices=data3));

    this.questionservice.getQuestionsById(this.defiId).subscribe((data2=>this.questions=data2));

    this.defiservice.getDefiById(this.defiId).subscribe((data=>this.defiedit=data));
    this.arretservice.getArrets().subscribe((data1=>this.arrets=data1));

    

  }

  editdefi(){



    for (let i = 0; i < this.questions.length; i++) {
      let description = document.querySelector('#a' + i) as HTMLInputElement;

      let secrets = document.querySelector('#b' + i) as HTMLInputElement;
      let points = document.querySelector('#c' + i) as HTMLInputElement;
      this.questions[i].Description=description.value;
      this.questions[i].Secrets=secrets.value;
      this.questions[i].points=Number(points.value);
      //update question dans la base de données
      this.questionservice.updateQuestion(this.questions[i]);
      //------------

    }

    for (let x = 0; x < this.indices.length; x++) {
      let descriptionIndice = document.querySelector('#i' + x) as HTMLInputElement;
      let pointsIndice = document.querySelector('#v' + x) as HTMLInputElement;
      this.indices[x].Description=descriptionIndice.value;
      this.indices[x].points=Number(pointsIndice.value);
      this.indiceservice.updateIndice(this.indices[x]);
                                                             }

   // this.parentData=0;
//********mise à jour de code d'arret ************
  for (let index = 0; index < this.arrets.length; index++) {
        if(this.arrets[index].Arret==this.defiedit.Arret){
          this.defiedit.Codearret=this.arrets[index].Codearret;
        }
      }

//------------
//associer l'Id reçu de la vu précédente
this.defiedit.Id=this.defiId;
//mise à jour de date de modification 
this.defiedit.Datedemodification=new Date();

                                                          
    this.defiservice.updateDefi(this.defiedit); 

    console.log("le defi",this.defiedit)

    for (let b = 0; b < this.questions.length; b++) {
      console.log("les question",this.questions[b]);
      console.log("les indices",this.indices[b]);

      
    }

    console.log("fin de la méthode");


     //implementer la méthode Setstep() pour sortir de la vu
  
  }


  setPage(page:number){

this.Page.emit(page);

  }
   
}
