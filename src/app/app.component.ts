import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormArray, } from '@angular/forms';


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
  inputField: any[] = [1];
  newArray: any = [{ key: 1, values: '' }];

  //formBuilder used for formControl and formGroup
  constructor(private formBuilder: FormBuilder) {

    //Empty array for storing userForm details
    this.listData = [];
  }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      mobileNo: ['', [Validators.required, Validators.pattern('^[0-9]*$'), Validators.minLength(10), Validators.maxLength(20)]],
      gender: ['', Validators.required],
      checkbox: [false, Validators.requiredTrue],
      hobbies: this.formBuilder.array([
        this.formBuilder.control(null)
      ])
    })
  }

  submit() {
    if (this.userForm.valid) {
      // adding data to array from user inputs
      this.listData.push(this.userForm.value);
      this.inputField.push(this.userForm.value);
      console.log(this.listData);
      
    }
    else {
      return;
    }
  }

  addRow() {
    let keyValue = this.inputField.length+1;
    this.newArray.push({ key: keyValue, values: '' });
    this.inputField.push(keyValue);
  }

  // addHobby(){
  //   let hobbies = <FormArray>this.userForm.controls.hobbies;
  //   hobbies.push(this.formBuilder.formGroup(Hobby));
  // }


  removeItem(index: number) {
    this.listData.splice(index, 1);
  }

  onSubmit() {
    this.submitted = true;
    if (this.userForm.invalid) {
      return;
    }
  }

  reset() {
    this.submitted = false;
    this.userForm.reset();
  }

}
