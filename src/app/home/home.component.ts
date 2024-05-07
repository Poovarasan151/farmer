import { Component } from '@angular/core';
import * as bootstrap from 'bootstrap';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor() { }

  ngOnInit(): void {
    // Manually initialize the carousel
    let myCarousel = document.querySelector('#demo')!;
    let carousel = new bootstrap.Carousel(myCarousel);
  }


}
