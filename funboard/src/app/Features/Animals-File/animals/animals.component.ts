import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-animals',
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './animals.component.html',
  styleUrl: './animals.component.css'
})
export class AnimalsComponent {

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
    'Monkey',
    'Snake',
    'Rabbit',
    'Pig',
    'Bird',
    'Donkey',
    'Wolf',
    'Deer',
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

    const audio = new Audio('assets/animals-names/Learn Animals Names.mp3');
    audio.play();

  }




  playSound(animal: string) {
    // Play the sound
    const audio = new Audio(`assets/animals-names/${animal}.mp3`);
    audio.play().catch(err => console.log('Audio error', err));

    // Show the image for the letter
  }



}
