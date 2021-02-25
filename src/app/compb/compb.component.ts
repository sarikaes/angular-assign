import { Component, OnInit } from '@angular/core';
import {CompService} from '../comp.service'
@Component({
  selector: 'app-compb',
  templateUrl: './compb.component.html',
  styleUrls: ['./compb.component.css']
})
export class CompbComponent implements OnInit {

  constructor(private compService:CompService) { }

  tables:any=[]
  ngOnInit(): void {
    this.compService.dataAsobservable$.subscribe(message=>{
      this.tables.push(message)
    })
  }

}
