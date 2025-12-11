import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-numbers-next',
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './numbers-next.component.html',
  styleUrl: './numbers-next.component.css',
  standalone: true
})
export class NumbersNextComponent {

  constructor(private router: Router) { }

  // ⭐ Array of numbers 1–100
  numbers: number[] = Array.from({ length: 100 }, (_, i) => i + 1);

  // ⭐ Hold current playing audio
  currentAudio: HTMLAudioElement | null = null;

  // ⭐ Play sound with STOP previous audio logic
  playSound(num: number) {

    // stop previous audio if playing
    if (this.currentAudio) {
      this.currentAudio.pause();
      this.currentAudio.currentTime = 0;
    }

    // play new audio
    this.currentAudio = new Audio(`assets/Learn Numbers Spelling/${num}.mp3`);
    this.currentAudio.play().catch(err => console.log("Audio error:", err));
  }

  // ⭐ UI random color generator
  getRandomColor(num: number): string {
    const colors = [
      '#FF5733', '#33B5E5', '#FFB300', '#00C851', '#AA66CC',
      '#FF4444', '#2BBBAD', '#4285F4', '#FFC107', '#0099CC'
    ];
    return colors[(num - 1) % colors.length];
  }
}
