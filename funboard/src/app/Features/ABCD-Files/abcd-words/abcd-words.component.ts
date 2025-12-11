import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-abcd-words',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './abcd-words.component.html',
  styleUrls: ['./abcd-words.component.css']
})
export class AbcdWordsComponent {

  letters: string[] = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  currentImage: string | null = null;

  currentAudio: HTMLAudioElement | null = null;  // <-- ADDED

  constructor(private router: Router) { }

  ngOnInit() {
    const introAudio = new Audio('assets/Alphabet-words-sounds/LEARN ABCD WORDS.mp3');
    introAudio.play().catch(err => console.log('Autoplay blocked', err));
  }

  playSound(letter: string) {

    // 🔴 Stop previous audio if playing
    if (this.currentAudio) {
      console.log("Stopping previous sound...");
      this.currentAudio.pause();
      this.currentAudio.currentTime = 0;
    }

    // 🔊 Play new audio
    this.currentAudio = new Audio(`assets/Alphabet-words-sounds/${letter}.mp3`);

    this.currentAudio.play().catch(err => {
      console.error("Audio play error:", err);
    });

    // 🖼️ Update Image
    this.currentImage = `assets/Alphabet-words-images/${letter}.webp`;
  }

  // Random color generator (unchanged)
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
