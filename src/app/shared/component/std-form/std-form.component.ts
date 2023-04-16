import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Istud } from '../../model/student';

@Component({
  selector: 'app-std-form',
  templateUrl: './std-form.component.html',
  styleUrls: ['./std-form.component.scss']
})
export class StdFormComponent implements OnInit {
  fnamevalu !:string;
  lnamevalu !:string;
  emailvalu !:string;
  contactvalu !:string;
  @Output() updatestdDdata : EventEmitter<Istud> = new EventEmitter<Istud> ()
  constructor() { }

  ngOnInit(): void {
  }
  onBtnClick(eve : Event){
    let obj : Istud = {
      fname:this.fnamevalu,
      lanme:this.lnamevalu,
      email: this.emailvalu,
      contact: +this.contactvalu,
    }
    console.log(obj);
    this.updatestdDdata.emit(obj);
    this.fnamevalu='';
    this.lnamevalu='';
    this.emailvalu='';
    this.contactvalu='';
  }
}
