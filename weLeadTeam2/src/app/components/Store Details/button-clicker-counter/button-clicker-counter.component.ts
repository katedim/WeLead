import { Component, inject } from '@angular/core';
import { PublisherService } from '../../../services/publisher.service';

@Component({
  selector: 'app-button-clicker-counter',
  standalone: true,
  imports: [],
  templateUrl: './button-clicker-counter.component.html',
  styleUrl: './button-clicker-counter.component.css'
})
export class ButtonClickerCounterComponent {
  publisherService =inject(PublisherService)
  counter = 0;

constructor(){
  this.publisherService.listenForData().subscribe((
    data) => {
      console.log()
      this.increaseCounter();
    })
}

  increaseCounter(){
    this.counter++;
  }


}
