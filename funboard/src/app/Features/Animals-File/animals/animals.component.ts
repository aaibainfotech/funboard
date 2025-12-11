import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-animals',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './animals.component.html',
  styleUrl: './animals.component.css'
})
export class AnimalsComponent {

  constructor(private router: Router) { }

  currentImage: string | null = null;
  currentAudio: HTMLAudioElement | null = null;   // <-- added for stop previous sound

  animals = [
    'Cat', 'Dog', 'Cow', 'Sheep', 'Goat', 'Horse', 'Duck',
    'Birds', 'Hen', 'Loin', 'Tiger', 'Elephant', 'Monkey',
    'Snake', 'Rabbit', 'Pig', 'Bird', 'Donkey', 'Wolf',
    'Deer', 'Bee', 'Mouse', 'Bear', 'Parrot', 'Crow',
    'Owl', 'Peacock', 'Cheetah'
  ];

  imagePaths: string[] = [];

  ngOnInit() {
    // Create image paths automatically
    this.imagePaths = this.animals.map(animal =>
      `assets/animals-name-images/${animal}.webp`
    );

    // Intro sound
    const intro = new Audio('assets/animals-names/Learn Animals Names.mp3');
    intro.play().catch(() => { });
  }

  playSound(animal: string) {

    // 🔴 Stop previous sound
    if (this.currentAudio) {
      this.currentAudio.pause();
      this.currentAudio.currentTime = 0;
    }

    // 🔊 Play new sound
    this.currentAudio = new Audio(`assets/animals-names/${animal}.mp3`);
    this.currentAudio.play().catch(err => {
      console.log("Audio error", err);
    });

    // 🖼️ Show animal image
    this.currentImage = `assets/animals-name-images/${animal}.webp`;
  }

}
