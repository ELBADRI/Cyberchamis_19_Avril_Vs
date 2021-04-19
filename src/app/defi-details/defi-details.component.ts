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
@Input() defiId: string ="";

  public defi: any;
  constructor(private defiserver:DefisService) { }


  ngOnInit(): void {

this.defiserver.getDefiById(this.defiId).subscribe((data=>this.defi=data))

  }

}
