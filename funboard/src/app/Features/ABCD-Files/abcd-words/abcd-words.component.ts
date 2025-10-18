import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-abcd-words',
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './abcd-words.component.html',
  styleUrls: ['./abcd-words.component.css'] // fixed from styleUrl to styleUrls
})
export class AbcdWordsComponent {

  letters: string[] = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  currentImage: string | null = null; // holds the image path

  constructor(private router: Router) { }

  ngOnInit() {
    const audio = new Audio('assets/Alphabet-words-sounds/LEARN ABCD WORDS.mp3');
    audio.play().catch(err => console.log('Autoplay blocked', err));
  }

  playSound(letter: string) {
    // Play the sound
    const audio = new Audio(`assets/Alphabet-words-sounds/${letter}.mp3`);
    audio.play().catch(err => console.log('Audio error', err));

    // Show the image for the letter
    this.currentImage = `assets/Alphabet-words-images/${letter}.webp`; // make sure images are in this folder
  }

}
