import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { empty } from 'rxjs';
import { Arret } from 'src/environments/Arret';
import { Defis } from 'src/environments/Defis';
import { Indice } from 'src/environments/Indice';
import { Question } from 'src/environments/Question';
import { ArretService } from '../arret.service';
import { DefisService } from '../defis.service';
import { IndiceService } from '../indice.service';
import { QuestionService } from '../question.service';

@Component({
  selector: 'app-creation-defi',
  templateUrl: './creation-defi.component.html',
  styleUrls: ['./creation-defi.component.scss']
})
export class CreationDefiComponent implements OnInit {
  @Output() Page: EventEmitter<number> = new EventEmitter();

  public deficree: Defis = {
    id: "",
    titre: "",
    datedecreation: new Date(),

    //dateNull??
    datedemodification:new Date() ,
    description: "",
    
    type: "",
    auteur: "",
    arret: "",
    codearret: "",
    motscles: "",
    duree: "",
    prologue: "",
    points: 1,
    epilogue: "",
    commentaires: "",
  };
  public defisListe: Defis[] = [];

  public arrets: Arret[] = [];


  public questions: Question[]=[];
  //public question!: Question;


  public indices: Indice[] = [];
  public indice!: Indice;








  constructor(private defiservice: DefisService, private arretservice: ArretService, private questionservice: QuestionService, private indiceservice: IndiceService) { }

  ngOnInit(): void {
/*
    this.arretservice.getArrets().subscribe((data1 => this.arrets = data1));
    this.defiservice.getDefis().subscribe((data2 => this.defisListe = data2));*/

  }

 


  ajouterDefi() {
    this.deficree.id=this.genereNId();
    let pointTotal=0;
    
   this.questions.forEach((q,i)=>{
    q.id=this.deficree.id;
    q.label=i+1;
    pointTotal=pointTotal+q.points;
    this.questionservice.creationQuestion(q).subscribe();
  });

  
  this.indices.forEach((n,v)=>{
    n.id=this.deficree.id;
    n.label=v+1;
this.indiceservice.creationIndice(n).subscribe();  
});

this.deficree.points=pointTotal;
this.deficree.datedecreation=new Date();
//Arret et code
this.arrets.forEach((a)=>{
  if (a.Arret=this.deficree.arret){
    this.deficree.codearret=a.Codearret;
  };
});

this.defiservice.creationDefi(this.deficree).subscribe(x=>console.log("le defi crée",x));




  }

  setPage(page: number) {
    this.Page.emit(page);

  }

  taillequestion(n: string) {

    this.questions = [];

   for (let i = 0; i <Number(n) ; i++) {
      this.questions[i]={id:'',label:9,description: '',secrets:'',points:0};
      console.log("Questions",this.questions);

    }
  }

  tailleindice(n: string) {

    this.indices = [];
    for (let i = 0; i < (Number(n)); i++) {
      this.indices[i]={id:'',label:9,description: '',points:0};
      console.log("indice",this.indices);


    }

  }

  genereNumeroAleatoire(maxlimite: number, minilimite: number): string {


    let res = minilimite + (Number)(Math.random() * ((maxlimite - minilimite) + 1));
    return res.toFixed();
  }

  genereNId(): string {
    let exists: boolean = true;
    let idString: string = this.genereNumeroAleatoire(999, 100);
    idString = "D" + idString;
    let m = 0;
    while (exists == true) {
      while (m < this.defisListe.length && !(this.defisListe[m].id == idString)) {



        m++;
      }
      if (m < this.defisListe.length) {
        exists = true;
      }
      else {
        exists = false;

      }


    }

    return idString;
  }




  trackByIndex(index: number, question: Question): number {
    return index;
  }




}
