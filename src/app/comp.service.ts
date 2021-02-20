import { Injectable } from '@angular/core';
import {Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompService {
  private formData=new Subject<any>()
  dataAsobservable$=this.formData.asObservable()

  constructor() { }
  sentData(data:any){
    this.formData.next(data)
  }
}
