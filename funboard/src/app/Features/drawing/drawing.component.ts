import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-drawing',
  imports: [CommonModule, RouterLink, RouterLinkActive, FormsModule],
  templateUrl: './drawing.component.html',
  styleUrls: ['./drawing.component.css'],
})
export class DrawingComponent implements AfterViewInit {
  @ViewChild('canvas', { static: false }) canvas!: ElementRef<HTMLCanvasElement>;
  private ctx!: CanvasRenderingContext2D;
  private drawing = false;

  selectedColor: string = '#000000';
  brushSize: number = 5;

  ngAfterViewInit() {
    const canvas = this.canvas.nativeElement;
    this.ctx = canvas.getContext('2d')!;
    this.ctx.lineCap = 'round';
    this.ctx.lineJoin = 'round';

    // Mouse events
    canvas.addEventListener('mousedown', (e) => this.startDrawing(e));
    canvas.addEventListener('mouseup', () => this.stopDrawing());
    canvas.addEventListener('mousemove', (e) => this.draw(e));

    // Touch events (for mobile)
    canvas.addEventListener('touchstart', (e) => this.startTouch(e));
    canvas.addEventListener('touchmove', (e) => this.moveTouch(e));
    canvas.addEventListener('touchend', () => this.stopDrawing());
  }

  private startDrawing(event: MouseEvent) {
    this.drawing = true;
    this.ctx.beginPath();
    this.ctx.moveTo(event.offsetX, event.offsetY);
  }

  private draw(event: MouseEvent) {
    if (!this.drawing) return;
    this.ctx.strokeStyle = this.selectedColor;
    this.ctx.lineWidth = this.brushSize;
    this.ctx.lineTo(event.offsetX, event.offsetY);
    this.ctx.stroke();
  }

  private stopDrawing() {
    this.drawing = false;
    this.ctx.closePath();
  }

  private startTouch(event: TouchEvent) {
    event.preventDefault();
    const touch = event.touches[0];
    const rect = this.canvas.nativeElement.getBoundingClientRect();
    this.ctx.beginPath();
    this.ctx.moveTo(touch.clientX - rect.left, touch.clientY - rect.top);
    this.drawing = true;
  }

  private moveTouch(event: TouchEvent) {
    event.preventDefault();
    if (!this.drawing) return;
    const touch = event.touches[0];
    const rect = this.canvas.nativeElement.getBoundingClientRect();
    this.ctx.lineTo(touch.clientX - rect.left, touch.clientY - rect.top);
    this.ctx.strokeStyle = this.selectedColor;
    this.ctx.lineWidth = this.brushSize;
    this.ctx.stroke();
  }

  clearCanvas() {
    const canvas = this.canvas.nativeElement;
    this.ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
}
