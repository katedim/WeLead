import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {RouterLink, RouterLinkActive } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive,  ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'

})

export class LoginComponent implements OnInit {
  form!: FormGroup
  
  ngOnInit(){
    this.setFormValues();
    // console.log(this.form);
    console.log("test2");
   
  }

  setFormValues() {
    this.form = new FormGroup({
      Email_address: new FormControl("",Validators.required), 
      Password: new FormControl("",Validators.required)
    });

}
  onSubmit(){
    if(this.form.valid){
      console.log("valid");
    }else{
      this.form.markAllAsTouched();
      console.log("invalid");
      
      

    }
    
    
 }
 
}





  
