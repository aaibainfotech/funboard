import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalsNameSoundsComponent } from './animals-name-sounds.component';

describe('AnimalsNameSoundsComponent', () => {
  let component: AnimalsNameSoundsComponent;
  let fixture: ComponentFixture<AnimalsNameSoundsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimalsNameSoundsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimalsNameSoundsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
