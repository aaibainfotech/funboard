import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-numbers',
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './numbers.component.html',
  styleUrl: './numbers.component.css'
})
export class NumbersComponent {

  constructor(private router: Router) { }

  numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  playSound(letter: number) {
    const audio = new Audio(`assets/Learn Numbers/${letter}.mp3`);
    audio.play();
  }


  getRandomColor(num: number): string {
    const colors = [
      '#FF5733', '#33B5E5', '#FFB300', '#00C851', '#AA66CC',
      '#FF4444', '#2BBBAD', '#4285F4', '#FFC107', '#0099CC'
    ];
    return colors[(num - 1) % colors.length];
  }


}
