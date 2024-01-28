import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { FormGroup, FormBuilder, ReactiveFormsModule, Validators, FormControl, FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, ReactiveFormsModule, FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit {
  userData :any;

  usersService = inject(UsersService);
  signupForm !: FormGroup

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit() {

    this.signupForm = this.formBuilder.group({
      fullname: ['', Validators.required] ,
      password: ['', Validators.required],
      email: ['', {validators:[Validators.required,Validators.email]}]

    });

  }

  signUp(){
   
    if (this.signupForm.valid) {
      this.userData={"fullname":this.signupForm.value.fullname,"password":this.signupForm.value.password, "email":this.signupForm.value.email }
      console.log(this.signupForm.value) 
      this.usersService.PostUser(this.userData).subscribe((res: any) => {
        alert("SignUp Successfull");
        this.signupForm.reset();
      
       
        this.router.navigate(['/login']);

      }, (err: any) => {
        alert("Something went wrong")
      });

      if (this.signupForm.valid) {
        console.log("valid");
      } else {
        this.signupForm.markAllAsTouched();
        console.log("invalid");

      }
      console.log(this.signupForm);
    }

  }
}