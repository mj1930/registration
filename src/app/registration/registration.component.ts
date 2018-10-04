import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators as Validators, AbstractControl } from '@angular/forms';
import { RegistrationService } from './registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  providers: [RegistrationComponent]
})
export class RegistrationComponent implements OnInit {

  registerForm: FormGroup;
  registerService: Promise<any>;

  constructor(private formBuilder: FormBuilder, private service: RegistrationService) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.compose([Validators.required])],
      number: ['', Validators.compose([Validators.required])],
      course_name: ['', Validators.compose([Validators.required])],
      email: ['', Validators.compose([Validators.required])],
      branch_name: ['', Validators.compose([Validators.required])],
      course_year: ['', Validators.compose([Validators.required])],
      college_name: ['', Validators.compose([Validators.required])]
    });
  }

  register(data) {
    if (!this.registerForm.valid) {
      alert('Please fill all details');
    }

    this.registerService = this.service.register(data).then((res: any) => {
      if (res.status === 200) {
        alert('data saved');
      } else if (res.status === 202) {
        alert('user already registerd');
      }
    })
  }

}
