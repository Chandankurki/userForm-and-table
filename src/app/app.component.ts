import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, CheckboxControlValueAccessor, CheckboxRequiredValidator } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'Form';
  listData: any;
  userForm!: FormGroup;
  submitted = false;


  //formBuilder used for formControl and formGroup
  constructor(private formBuilder: FormBuilder) {

    //Empty array for storing userForm details
    this.listData = [];
  }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      mobileNo: ['', [Validators.required, Validators.minLength(10),Validators.maxLength(20)]],
      gender: ['', Validators.required],
      checkbox: [false,Validators.requiredTrue],
    })
  }

  submit() {
    if (this.userForm.valid) {
      // adding data to array from user inputs
      this.listData.push(this.userForm.value);
      //for clearing input fields
      // this.userForm.reset();
    }
  }

  removeItem(element: any) {
    this.listData.forEach((value: any, index: any) => {
      if (value == element) {
        this.listData.splice(index, 1);
      }
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.userForm.invalid) {
      return;
    }
  }
}
