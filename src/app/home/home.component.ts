import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {

  images = [
    // "assets/images/main.jpg",
    "assets/images/main8.jpg",
    // "assets/images/main2.jpg",
    // "assets/images/main3.jpg",
  ];

  currentIndex = 0;
  ngOnInit() {
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    }, 3000);
  }
}
