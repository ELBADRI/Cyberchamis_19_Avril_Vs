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
    Id: "",
    Titre: "",
    Datedecreation: new Date(),

    //dateNull??
    Datedemodification:new Date() ,
    Description: "",
    
    Type: "",
    Auteur: "",
    Arret: "",
    Codearret: "",
    Motscles: "",
    Duree: "",
    Prologue: "",
    Points: 1,
    Epilogue: "",
    commentaires: "",
  };
  public defisListe: Defis[] = [];

  public arrets: Arret[] = [];


  public questions: Question[] = [];
  public question: Question = { Id: "", Label: 0, Description: "", Secrets: "", points: 1 };


  public indices: Indice[] = [];
  public indice: Indice = { Id: "", Label: 0, Description: "", points: 1 };








  constructor(private defiservice: DefisService, private arretservice: ArretService, private questionservice: QuestionService, private indiceservice: IndiceService) { }

  ngOnInit(): void {

    this.arretservice.getArrets().subscribe((data1 => this.arrets = data1));
    this.defiservice.getDefis().subscribe((data2 => this.defisListe = data2));

  }

 


  ajouterDefi() {

    //associer un ID UNIQUE DE DEFIS 
    this.deficree.Id=this.genereNId();
    this.deficree.Datedecreation=new Date();
    //this.deficree.Codearret=this.deficree.Arret.
  
//pour calculer les points total de defis
    let pointTotal=0;
    //-------
    let n = document.querySelector('#myinput') as HTMLInputElement;
    let nbrQ: number = Number(n.value);
    for (let i = 0; i < nbrQ; i++) {
      let description = document.querySelector('#a' + i) as HTMLInputElement;

      let secrets = document.querySelector('#b' + i) as HTMLInputElement;
      let points = document.querySelector('#c' + i) as HTMLInputElement;

      this.question.Id=this.deficree.Id;
      this.question.Label = i + 1;
      this.question.Description = description.value;
      this.question.Secrets = secrets.value;
      this.question.points = Number(points.value);
      pointTotal=pointTotal+this.question.points;
      //subscribe??
      this.questionservice.creationQuestion(this.question);
      this.questions[i] = this.question;
      console.log("LES QUESTIONS", this.questions[i]);
      //ajout des questions dans le Base de données

    }
    let nI = document.querySelector('#myinputIndice') as HTMLInputElement;
    let nbrI: number = Number(nI.value);
    let pointTotalIndice=0;

    for (let x = 0; x < nbrI; x++) {
      let descriptionIndice = document.querySelector('#i' + x) as HTMLInputElement;
      let pointsIndice = document.querySelector('#v' + x) as HTMLInputElement;
      this.indice.Id=this.deficree.Id;
      this.indice.Label = x + 1;
      this.indice.Description = descriptionIndice.value;
      this.indice.points = Number(pointsIndice.value);
      pointTotalIndice=pointTotalIndice+this.indice.points;
      //subscribe
      this.indiceservice.creationIndice(this.indice);
      this.indices[x] = this.indice;
      console.log("IterationIndice", x);

      console.log("LES QUESTIONS", this.indices[x]);




    }
      
      //---------
      //pour calculer les points total de defis
      this.deficree.Points=pointTotal;
      //affecter la date de création
      this.deficree.Datedecreation=new Date();
      //récupérer le code de l'arret de l'arret choisi
      for (let index = 0; index < this.arrets.length; index++) {
        if(this.arrets[index].Arret==this.deficree.Arret){
          this.deficree.Codearret=this.arrets[index].Codearret;
        }
      }
      console.log("LE nouvou defi", this.deficree);
this.defiservice.creationDefi(this.deficree);

  }

  setPage(page: number) {
    this.Page.emit(page);

  }

  taillequestion(n: string) {
    this.questions = [];
    for (let i = 0; i < (Number(n)); i++) {
      this.questions.push(this.question);

    }

  }

  tailleindice(n: string) {

    this.indices = [];
    for (let i = 0; i < (Number(n)); i++) {
      this.indices.push(this.indice);

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
      while (m < this.defisListe.length && !(this.defisListe[m].Id == idString)) {



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









}
