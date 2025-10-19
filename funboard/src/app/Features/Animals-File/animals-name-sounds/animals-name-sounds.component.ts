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

  currentImage: string | null = null; // holds the image path


  animals = [
    'Cat',
    'Dog',
    'Cow',
    'Sheep',
    'Goat',
    'Horse',
    'Duck',
    'Birds',
    'Hen',
    'Loin',
    'Tiger',
    'Elephant',
    'Deer',
    'Monkey',
    'Snake',
    'Rabbit',
    'Pig',
    'Bird',
    'Donkey',
    'Wolf',
    'Bee',
    'Mouse',
    'Bear',
    'Parrot',
    'Crow',
    'Owl',
    'Peacock',
    'Cheetah'
  ];

  imagePaths: string[] = [];

  ngOnInit() {
    // Generate all image paths dynamically
    this.imagePaths = this.animals.map(animal =>
      `assets/animals-name-images/${animal}.webp`
    );

    const audio = new Audio(`assets/animals-name-sounds/Learn Animals Sounds.mp3`);
    audio.play();

  }




  playSound(animal: string) {
    // Play the sound
    const audio = new Audio(`assets/animals-name-sounds/${animal}.mp3`);
    audio.play().catch(err => console.log('Audio error', err));

    // Show the image for the letter
  }



}