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
  currentLyrics: string | null = null;

  // 🔹 All poem audio + lyrics
  private poemMap: Record<string, { audio: string; lyrics: string }> = {
    twinkle: {
      audio: 'assets/poems/twinkle.mp3',
      lyrics: `Twinkle, twinkle, little star,
How I wonder what you are!
Up above the world so high,
Like a diamond in the sky.`,
    },
    baa: {
      audio: 'assets/poems/baa.mp3',
      lyrics: `Baa, baa, black sheep,
Have you any wool?
Yes sir, yes sir,
Three bags full!`,
    },
    rain: {
      audio: 'assets/poems/rain.mp3',
      lyrics: `Rain, rain, go away,
Come again another day,
Little Johnny wants to play.`,
    },
    johnny: {
      audio: 'assets/poems/johnny.mp3',
      lyrics: `Johnny Johnny, yes papa,
Eating sugar? No papa,
Telling lies? No papa,
Open your mouth, ha ha ha!`,
    },
    train: {
      audio: 'assets/poems/train.mp3',
      lyrics: `Choo choo train, chugging down the track,
Clickety clack, clickety clack!
Over the bridge, through the tunnel too,
Choo choo train, I love you!`,
    },
    row: {
      audio: 'assets/poems/row.mp3',
      lyrics: `Row, row, row your boat,
Gently down the stream,
Merrily, merrily, merrily, merrily,
Life is but a dream.`,
    },
    clap: {
      audio: 'assets/poems/clap.mp3',
      lyrics: `Clap your hands, clap your hands,
Listen to the music and clap your hands.
Turn around, turn around,
Listen to the music and turn around.`,
    },
    ringa: {
      audio: 'assets/poems/ringa.mp3',
      lyrics: `Ring-a-ring o’ roses,
A pocket full of posies,
A-tishoo! A-tishoo!
We all fall down!`,
    },
  };

  // 🔹 Play selected poem
  playPoem(poem: string) {
    if (this.audio) this.audio.pause();

    const poemData = this.poemMap[poem];
    if (poemData) {
      this.audio = new Audio(poemData.audio);
      this.audio.play();
      this.currentLyrics = poemData.lyrics;
    }
  }

  // 🔹 Stop poem
  stopPoem() {
    if (this.audio) {
      this.audio.pause();
      this.audio.currentTime = 0;
    }
    this.currentLyrics = null;
  }
}
