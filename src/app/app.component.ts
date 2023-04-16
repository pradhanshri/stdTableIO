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
  onStdUpdate(data:Istud){

    this.stdTableIO.push(data);

  }
  
}
