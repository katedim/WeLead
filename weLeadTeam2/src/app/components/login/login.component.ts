import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { UsersService } from '../../services/users.service';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,RouterLink, RouterLinkActive],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'

})

export class LoginComponent implements OnInit{
  usersService = inject (UsersService);
  
  ngOnInit(){
    console.log('testlogin1');
    this.usersService.getUsers().subscribe({
      next:response=> {console.log (response)}
    })
    
  }
  onSubmit() {

    // this.usersService.getUsers().subscribe({
      // next:response=> {console.log (response)}
    //})
    // na kanei filter gia na epistrefei ena user me ta antistoixa paidia


  // this.userService.addUser(this.user).subscribe(() => {
  //   console.log('User added successfully!');
  // });
  console.log('testlogin');
}

}
