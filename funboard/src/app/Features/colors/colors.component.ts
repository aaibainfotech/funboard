import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-colors',
  imports: [CommonModule, RouterLink],
  templateUrl: './colors.component.html',
  styleUrl: './colors.component.css'
})
export class ColorsComponent {

  constructor(private router: Router) { }

  // ⭐ Current playing audio reference
  currentAudio: HTMLAudioElement | null = null;

  colors = [
    { name: 'Red', icon: '🍎' },
    { name: 'Blue', icon: '🔵' },
    { name: 'Yellow', icon: '☀️' },
    { name: 'Green', icon: '🌿' },
    { name: 'Purple', icon: '🍇' },
    { name: 'Orange', icon: '🍊' },
    { name: 'Pink', icon: '🌸' },
    { name: 'Brown', icon: '🍫' },
    { name: 'Black', icon: '🌙' },
    { name: 'White', icon: '☁️' },
  ];

  // ⭐ Stop previous + play new audio
  playSounds(color: string) {
    // Stop previous audio if playing
    if (this.currentAudio) {
      this.currentAudio.pause();
      this.currentAudio.currentTime = 0;
    }

    // Play new audio
    this.currentAudio = new Audio(`assets/Colors/${color}.mp3`);
    this.currentAudio.play().catch(err =>
      console.log("Audio play error:", err)
    );
  }
}
