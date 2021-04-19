import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Arret } from 'src/environments/Arret';

@Component({
  selector: 'app-test-submit',
  templateUrl: './test-submit.component.html',
  styleUrls: ['./test-submit.component.scss']
})
export class TestSubmitComponent implements OnInit {
public arret :Arret={Arret: "l'ancien titre",Codearret:"fd", streetmap:"xs"};
  constructor() { }

  ngOnInit(): void {
    
    console.log(this.arret)

  }
  edittitre(){
    console.log("its been submitted "+this.arret.Arret)
    console.log("its been submitted "+this.arret.Codearret)
    console.log("its been submitted "+this.arret.streetmap)

  }
}
