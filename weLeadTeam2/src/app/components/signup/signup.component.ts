import { CommonModule } from '@angular/common';
import { Component, inject , OnInit} from '@angular/core';
import { UsersService } from '../../services/users.service';
import { RouterLink, RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit{
  usersService = inject (UsersService);
//   user ={username:'',password:''};

//   constructor(private userServise: UsersService){}
ngOnInit(){
  console.log('test');
  this.usersService.getUsers().subscribe({
    next:response=> {console.log (response)}
  })
}
  onSubmit() {
    // this.userService.addUser(this.user).subscribe(() => {
    //   console.log('User added successfully!');
    // });
  
    console.log('test2');
  
  }
}



