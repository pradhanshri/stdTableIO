import { Component, Input, OnInit } from '@angular/core';
import { Istud } from '../../model/student';

@Component({
  selector: 'app-std-table',
  templateUrl: './std-table.component.html',
  styleUrls: ['./std-table.component.scss']
})
export class StdTableComponent implements OnInit {
  @Input() stdInfo : Array<Istud> = []
    constructor() { }

  ngOnInit(): void {
    console.log(this.stdInfo)
  }

}
