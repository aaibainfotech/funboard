import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-abcd',
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './abcd.component.html',
  styleUrl: './abcd.component.css'
})
export class ABCDComponent {

  ngOnInit() {
    const audio = new Audio(`assets/char-sounds/LEARN ABCD.mp3`);
    audio.play();
  }

  constructor(private router: Router) { }

  // Letters A-Z
  letters: string[] = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  playSound(letter: string) {
    const audio = new Audio(`assets/char-sounds/${letter}.wav`);
    audio.play();

  }


  // Random color generator for each letter
  getRandomColor(letter: string): string {
    const colors = [
      '#FF5733', '#33FF57', '#3357FF', '#F333FF', '#FFD133',
      '#FF33A6', '#33FFF5', '#A633FF', '#FF8C33', '#33FF99',
      '#FF3333', '#33D4FF', '#FF9933', '#FF33C4', '#33FF57',
      '#6F33FF', '#FF336F', '#33FFA5', '#FFC733', '#33A6FF',
      '#FF5733', '#57FF33', '#5733FF', '#33FFF3', '#FF33E6',
      '#FFB533'
    ];
    const index = letter.charCodeAt(0) % colors.length;
    return colors[index];
  }



}
