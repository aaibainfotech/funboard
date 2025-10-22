import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

interface Question {
  num1: number;
  num2: number;
  operation: 'add' | 'subtract' | 'multiply' | 'divide';
  answer: number;
}


@Component({
  selector: 'app-math',
  imports: [CommonModule, FormsModule, RouterLink, RouterLinkActive],
  templateUrl: './math.component.html',
  styleUrl: './math.component.css'
})
export class MathComponent {
  currentQuestion: Question | null = null;
  showAnswer: boolean = false;

  constructor(private router: Router) { }

  // Generate a random number between 1 and 20
  getRandomNumber(): number {
    return Math.floor(Math.random() * 20) + 1;
  }

  // Generate a question based on operation
  generateQuestion(operation: 'add' | 'subtract' | 'multiply' | 'divide') {
    const num1 = this.getRandomNumber();
    const num2 = this.getRandomNumber();
    let answer = 0;

    switch (operation) {
      case 'add':
        answer = num1 + num2;
        break;
      case 'subtract':
        answer = num1 - num2;
        break;
      case 'multiply':
        answer = num1 * num2;
        break;
      case 'divide':
        answer = num2 === 0 ? 0 : parseFloat((num1 / num2).toFixed(2));
        break;
    }

    this.currentQuestion = { num1, num2, operation, answer };
    this.showAnswer = false;
  }

  revealAnswer() {
    this.showAnswer = true;
  }

  nextQuestion() {
    if (this.currentQuestion) {
      this.generateQuestion(this.currentQuestion.operation);
    }
  }
}