import { Component } from '@angular/core';
import { Istud } from './shared/model/student';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  fnamevalu !:string;
  lnamevalu !:string;
  emailvalu !:string;
  contactvalu !:string;
  
  stdTableIO : Array<Istud> = [
    {
      fname: "Jhon",
      lanme: "Doe",
      email: "jhon@test.com",
      contact: 8956362891,
    }
  ]
  onBtnClick(eve : Event){
    let obj : Istud = {
      fname:this.fnamevalu,
      lanme:this.lnamevalu,
      email: this.emailvalu,
      contact: +this.contactvalu,
    }
    console.log(obj);
    this.stdTableIO.push(obj);
    this.fnamevalu='';
    this.lnamevalu='';
    this.emailvalu='';
    this.contactvalu='';
  }
}
