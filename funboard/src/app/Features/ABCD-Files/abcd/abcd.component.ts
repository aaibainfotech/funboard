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

}
