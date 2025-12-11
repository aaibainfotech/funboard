import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-fruits',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.css']
})
export class FruitsComponent {

  // ⭐ Hold currently playing audio
  currentAudio: HTMLAudioElement | null = null;

  fruits = [
    { name: 'Apple', icon: '🍎', audio: 'assets/Fruits/apple.mp3' },
    { name: 'Banana', icon: '🍌', audio: 'assets/Fruits/banana.mp3' },
    { name: 'Mango', icon: '🥭', audio: 'assets/Fruits/mango.mp3' },
    { name: 'Orange', icon: '🍊', audio: 'assets/Fruits/orange.mp3' },
    { name: 'Grapes', icon: '🍇', audio: 'assets/Fruits/grapes.mp3' },
    { name: 'Watermelon', icon: '🍉', audio: 'assets/Fruits/watermelon.mp3' },
    { name: 'Strawberry', icon: '🍓', audio: 'assets/Fruits/strawberry.mp3' },
    { name: 'Pineapple', icon: '🍍', audio: 'assets/Fruits/pineapple.mp3' },
    { name: 'Peach', icon: '🍑', audio: 'assets/Fruits/peach.mp3' },
    { name: 'Cherry', icon: '🍒', audio: 'assets/Fruits/cherry.mp3' },
  ];

  // ⭐ Play sound with STOP previous logic
  playSound(audioPath: string) {
    // Stop currently playing audio
    if (this.currentAudio) {
      this.currentAudio.pause();
      this.currentAudio.currentTime = 0;
    }

    // Play new audio
    this.currentAudio = new Audio(audioPath);
    this.currentAudio.play().catch(err => console.log("Audio error:", err));
  }
}
