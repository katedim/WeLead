import { CommonModule } from '@angular/common';
import { Component, inject , OnInit} from '@angular/core';
import { UsersService } from '../../services/users.service';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import {FormGroup , FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit{


  usersService = inject (UsersService);
  public signupForm!: FormGroup;
  constructor (private formBuilder: FormBuilder , private http: HttpClient , private router:Router){}
   

ngOnInit(){

this.signupForm = this.formBuilder.group({
  fullname:[""],
  email:[""],
  password:[""],

})
}
  signUp(){
  this.http.post<any>('../assets/users.json',this.signupForm.value).subscribe( res=>{
    alert("SignUp Successfull");
    this.signupForm.reset();
    this.router.navigate(['login']);

  }, err=>{
    alert("Something went wrong")
  });
  
 }

}




// function signUp() {
  // throw new Error('Function not implemented.');
// }
//   // console.log('test');

//   this.usersService.getUsers().subscribe({
//     next:response=> {console.log (response)}
//   })
// }
//   onSubmit() {
//     // this.userService.addUser(this.user).subscribe(() => {
//     //   console.log('User added successfully!');
//     // });
  
//     console.log('test2');
  
//   }
// }
