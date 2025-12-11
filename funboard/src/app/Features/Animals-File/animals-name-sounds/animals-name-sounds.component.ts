import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-animals-name-sounds',
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './animals-name-sounds.component.html',
  styleUrl: './animals-name-sounds.component.css'
})
export class AnimalsNameSoundsComponent {

  constructor(private router: Router) { }

  currentImage: string | null = null;
  currentAudio: HTMLAudioElement | null = null; // ⭐ holds currently playing audio

  animals = [
    'Cat', 'Dog', 'Cow', 'Sheep', 'Goat', 'Horse', 'Duck', 'Birds',
    'Hen', 'Loin', 'Tiger', 'Elephant', 'Deer', 'Monkey', 'Snake',
    'Rabbit', 'Pig', 'Bird', 'Donkey', 'Wolf', 'Bee', 'Mouse',
    'Bear', 'Parrot', 'Crow', 'Owl', 'Peacock', 'Cheetah'
  ];

  imagePaths: string[] = [];

  ngOnInit() {
    // Generate image paths automatically
    this.imagePaths = this.animals.map(animal =>
      `assets/animals-name-images/${animal}.webp`
    );

    // ⭐ Play intro sound using stop-previous logic
    this.playAudio(`assets/animals-name-sounds/Learn Animals Sounds.mp3`);
  }

  // ⭐ UNIVERSAL AUDIO FUNCTION (STOP + PLAY)
  playAudio(path: string) {
    // Stop previous sound if playing
    if (this.currentAudio) {
      this.currentAudio.pause();
      this.currentAudio.currentTime = 0; // reset position
    }

    // Start new sound
    this.currentAudio = new Audio(path);
    this.currentAudio.play().catch(err => console.log("Audio error:", err));
  }

  // ⭐ Play animal sound + change image
  playSound(animal: string) {
    this.playAudio(`assets/animals-name-sounds/${animal}.mp3`);
    this.currentImage = `assets/animals-name-images/${animal}.webp`;
  }
}
