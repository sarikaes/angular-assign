import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CompService } from '../comp.service'

@Component({
  selector: 'app-compa',
  templateUrl: './compa.component.html',
  styleUrls: ['./compa.component.css']
})
export class CompaComponent implements OnInit {
  userForm: FormGroup;

  constructor(private fb:FormBuilder,private compService: CompService) {

    this.userForm = this.fb.group({
      uname:['', [Validators.required, Validators.minLength(8), Validators.pattern("[a-z0-9]*")]],
      fname:['', [Validators.required]],
      lname: ['', [Validators.required]],
      email: ['', [Validators.required,Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('[0-9]{10}$')]]
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
