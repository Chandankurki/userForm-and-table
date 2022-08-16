import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'Form';
  listData: any;
  userForm: any;
  a=[1,2,3,4];  
//formBuilder used for formControl and formGroup
  constructor(private fb: FormBuilder) {
    
    //Empty array for storing userForm details
    this.listData = [];
  }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.email),
      mobileNo: new FormControl('', [Validators.required, Validators.pattern("[0-9]{10}")]),
      gender: new FormControl('', Validators.required),
      checkbox: new FormControl('', Validators.required),
    })
  }

  submit() {
    //adding data to array from user inputs
    this.listData.push(this.userForm.value);

    //for clearing input fields
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
