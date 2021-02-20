import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CompService } from '../comp.service'

@Component({
  selector: 'app-compa',
  templateUrl: './compa.component.html',
  styleUrls: ['./compa.component.css']
})
export class CompaComponent implements OnInit {
  userForm: FormGroup;

  constructor(private compService: CompService) {

    this.userForm = new FormGroup({
      uname: new FormControl('', [Validators.required, Validators.minLength(8), Validators.pattern("[a-z0-9]*")]),
      fname: new FormControl('', [Validators.required]),
      lname: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.email]),
      phone: new FormControl('', [Validators.required, Validators.minLength(10), Validators.pattern('[0-9]*')])
    })
  }
  get uname() { return this.userForm.get('uname'); }
  get phone() { return this.userForm.get('phone'); }
  get email() { return this.userForm.get('email'); }
  get fname() { return this.userForm.get('fname'); }
  get lname() { return this.userForm.get('lname'); }

  onSubmit() {
    this.compService.sentData(this.userForm.value)
    console.log(this.userForm.value)
    this.userForm.reset()
  }

  ngOnInit(): void {
  }

}
