import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-poems',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './poems.component.html',
})
export class PoemsComponent {
  audio: HTMLAudioElement | null = null;

  playPoem(poem: string) {
    if (this.audio) this.audio.pause();

    const poemMap: any = {
      twinkle: 'assets/poems/twinkle.mp3',
      baa: 'assets/poems/baa.mp3',
      rain: 'assets/poems/rain.mp3',
      johnny: 'assets/poems/johnny.mp3',
    };

    this.audio = new Audio(poemMap[poem]);
    this.audio.play();
  }

  stopPoem() {
    if (this.audio) {
      this.audio.pause();
      this.audio.currentTime = 0;
    }
  }
}
