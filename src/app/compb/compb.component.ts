import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import {CompService} from '../comp.service'
@Component({
  selector: 'app-compb',
  templateUrl: './compb.component.html',
  styleUrls: ['./compb.component.css']
})
export class CompbComponent implements OnInit {

  constructor(private compService:CompService) { }

  tabledata:any=[]
  ngOnInit(): void {
    this.compService.dataAsobservable$.subscribe(message=>{
      this.tabledata.push(message)
    })
  }

}
