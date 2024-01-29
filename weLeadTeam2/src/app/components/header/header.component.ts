import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { PublicerService } from '../../services/publicer.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  publishService = inject(PublicerService);
  islogged = false;

  constructor() {
    this.publishService.listenForData().subscribe( data =>{
      if (data == 'user login') {
        this.islogged = true;
      }
    });

    console.log(window.location.href);
  }
}
