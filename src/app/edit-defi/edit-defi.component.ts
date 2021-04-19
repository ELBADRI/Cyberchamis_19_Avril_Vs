import { Component, Input, OnInit } from '@angular/core';
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

  public defiedit: Defis={ 
    Id:"gfgf",
    Titre :"",
    Datedecreation : new Date() ,
    Description :"",
    Datedemodification : new Date() ,
    Type  :"",
    Auteur :"",
    Arret :"",
    Codearret :"bvb",
    Motscles  :"",
    Duree :"",
    Prologue :"",
    Points :5,
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
//********mise à jour de code d'arret ************

//mise à jour de date de modification 
this.defiedit.Datedemodification=new Date();

for (let i = 0; i < this.indices.length; i++) {
  this.indiceservice.updateIndice(this.indices[i])
}
for (let i = 0; i < this.questions.length; i++) 
{

this.questionservice.updateQuestion(this.questions[i])           }
                                                          
    this.defiservice.updateDefi(this.defiedit); 

     //implementer la méthode Setstep() pour sortir de la vu
  
  }
   
}
