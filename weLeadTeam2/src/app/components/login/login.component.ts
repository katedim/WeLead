
import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { Route, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { FormControl, FormGroup, FormBuilder, ReactiveFormsModule, Validators, FormsModule, FormControlName } from '@angular/forms';
import { UsersService } from '../../services/users.service';
import { HttpClient } from '@angular/common/http';
import { PublicerService } from '../../services/publicer.service';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, ReactiveFormsModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'

})

export class LoginComponent implements OnInit {

  usersService = inject(UsersService);
  publishService = inject(PublicerService)

  loginform!: FormGroup

  userfound = false;

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit() {

    this.loginform = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });

  }

  login() {
    console.log(59)

    if (this.loginform.valid) {
      console.log(this.loginform.value)    
      this.usersService.GetUser().subscribe(res => {
        const user = res.users.find((a: any) => {
          if (a.email === this.loginform.value.email && a.password === this.loginform.value.password) {
            console.log("ok");
            this.userfound = true;
            this.publishService.publishData("user login");
            this.router.navigate(["/all-stores"]);
            return true;
          }
          return false;
        });
      
        if (!this.userfound) {
          window.alert("User not found");
        }
      });     

    }   

  }


}


