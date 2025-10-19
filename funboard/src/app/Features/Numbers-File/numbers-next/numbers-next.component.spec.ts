import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumbersNextComponent } from './numbers-next.component';

describe('NumbersNextComponent', () => {
  let component: NumbersNextComponent;
  let fixture: ComponentFixture<NumbersNextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NumbersNextComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumbersNextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
