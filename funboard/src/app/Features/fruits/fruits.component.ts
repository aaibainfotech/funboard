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

  playSound(audioPath: string) {
    const audio = new Audio(audioPath);
    audio.play();
  }
}
