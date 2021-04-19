import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-defis',
  templateUrl: './defis.component.html',
  styleUrls: ['./defis.component.scss']
})
export class DefisComponent implements OnInit {
  public defis=["defis1","defis2","defis3"];

  constructor() { }

  ngOnInit(): void {
  }

}
