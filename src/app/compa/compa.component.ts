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
      userName:['', [Validators.required, Validators.minLength(8), Validators.pattern("[a-z0-9]*")]],
      firstName:['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required,Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('[0-9]{10}$')]]
    })
  }
  get userName() { return this.userForm.get('userName'); }
  get firstName() { return this.userForm.get('firstName'); }
  get lastName() { return this.userForm.get('lastName'); }
  get phone() { return this.userForm.get('phone'); }
  get email() { return this.userForm.get('email'); }

  onSubmit() {
    this.compService.sentData(this.userForm.value)
    console.log(this.userForm.value)
    this.userForm.reset()
  }

  ngOnInit(): void {
  }

}
