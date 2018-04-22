import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { FormErrorStateMatcher ,regExps, errorMessages } from '../../shared/utility';


@Component({
  selector: 'app-user-signin',
  templateUrl: './user-signin.component.html',
  styleUrls: ['./user-signin.component.scss']
})
export class UserSigninComponent implements OnInit {

  passRegex: RegExp;
  signinForm: FormGroup;

  constructor(private fb: FormBuilder, private fm: FormErrorStateMatcher) {
    this.passRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}/;
   }

  ngOnInit() {
    this.signinForm = this.fb.group({
      'email': ['', [Validators.required, Validators.email]],
      'password': ['', [Validators.required, Validators.pattern(this.passRegex)]]
    });
  }

  submitForm() {
    console.log(this.signinForm);
  }

}
