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

  playSounds(color: string) {

    const audio = new Audio(`assets/Colors/${color}.mp3`);
    audio.play();

  }


}
