import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Arret } from 'src/environments/Arret';
import { Indice } from 'src/environments/Indice';
import { Question } from 'src/environments/Question';
import { DefisService } from '../defis.service';
import { IndiceService } from '../indice.service';
import { QuestionService } from '../question.service';

@Component({
  selector: 'app-test-submit',
  templateUrl: './test-submit.component.html',
  styleUrls: ['./test-submit.component.scss']
})
export class TestSubmitComponent implements OnInit {
public arret :Arret={Arret: "l'ancien titre",Codearret:"fd", streetmap:"xs"


};


allindices:Indice[]=[];
indicelabel!: Indice;


  indiceUpdated!: Indice;
  indiceRecu:Indice[]=[];
indice:Indice={id:"D127",label:2,description:"- NEW UPDATE.",points:17};
indiceCreate:Indice={id:"D117",label:8,description:"NEW TEST2 Crée.",points:45};
indiceNouvou!:Indice;

  constructor(private indiceservice:IndiceService,private questionservice:QuestionService,private defiservice:DefisService) { }

  ngOnInit(): void {
//all indices
this.indiceservice.getIndices().subscribe(data0=>{this.allindices=data0;
  console.log("getIndices",this.allindices);


});

this.indiceservice.getIndiceByLabel("D127",2).subscribe(x=>console.log("getIndiceByLabel",x));


    //Test//tout les indices pour un defi


   /* this.indiceservice.getIndicesByIdDefi("D127").subscribe(data=>{this.indiceRecu=data;
      console.log("les indices recu//getIndicesByIdDefi",this.indiceRecu);
    });*/
//test un seul indice

/*this.indiceservice.getIndiceByLabel("D127",2).subscribe(data4=>{this.indicelabel=data4;
  console.log("les indices recu//getIndiceByLabel",this.indicelabel);

})*/

//Test UpdateIndice
  /*  this.indiceservice.updateIndice({id:"X414",label:7,description:"NOOO TEST77 Crée.",points:77}).subscribe();*/

//Test Creation Indice
/*this.indiceservice.creationIndice({id:"X414",label:7,description:"NEW TEST77 Crée.",points:45}).subscribe();*/
/*this.indiceservice.deleteIndice({id:"X414",label:7,description:"NEW TEST77 Crée.",points:45}).subscribe(reponse=>console.log(reponse))*/
//Tester les question

/*
this.questionservice.getQuestionsByIdDefi("D127").subscribe(x=>console.log("getQuestionsByIdDefi",x));
this.questionservice.getQuestionsByLabel("D127",2).subscribe(x=>console.log("getQuestionsByLabel",x));
this.questionservice.getallQuestions().subscribe(x=>console.log("getallQuestions",x));
this.questionservice.updateQuestion({id:"D189",label:3,description:" Combien de serpants ?",secrets:"",points:5}).subscribe();
this.questionservice.creationQuestion({id:"D189",label:9,description:" Combien de ciels***** ?",secrets:"",points:7}).subscribe();
this.questionservice.deleteQuestion({id:"D189",label:9,description:" Combien de ciels***** ?",secrets:"",points:7}).subscribe();*/

this.defiservice.getDefis().subscribe(x=>console.log("getDefis",x));
this.defiservice.getDefiByIdDefi("D189").subscribe(x=>console.log("getDefiByIdDefi",x));
/*this.defiservice.deleteDefi({ 
  id:"XX956",
  titre :"NewTitre",
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
commentaires:"",}).subscribe();*/




  }
  edittitre(){
    ///

  }
}
