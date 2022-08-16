import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'Forms';
  userForm!: FormGroup;
  listData: any;

  constructor(private fb: FormBuilder) {
    this.listData = [];
  }

  ngOnInit() {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required, Validators.email],
      mobileNo: ['', Validators.required],
      gender: ['', Validators.required],
      checkbox: ['', Validators.required]
    })
  }
  onSubmit(form: NgForm) {
  }
  submit() {
    this.listData.push(this.userForm.value)
    this.userForm.reset();
  }

  reset() {
    this.userForm.reset();
  }

  removeItem(element: any) {
    this.listData.forEach((value: any, index: any) => {
      if (value == element) {
        this.listData.splice(index, 1);
      }
    });
  }



}
