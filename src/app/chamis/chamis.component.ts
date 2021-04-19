import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chamis',
  templateUrl: './chamis.component.html',
  styleUrls: ['./chamis.component.scss']
})
export class ChamisComponent implements OnInit {
  public chamis=["chami1","chami2","chamis3"];

  constructor() { }

  ngOnInit(): void {
  }

}
