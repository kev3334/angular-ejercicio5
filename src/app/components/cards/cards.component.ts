import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  numero:number=2;
  increment(){
    this.numero=this.numero + 1;
  }
  decrement(){
    if(this.numero!= 0){
      this.numero=this.numero - 1;
    }
  }
}
