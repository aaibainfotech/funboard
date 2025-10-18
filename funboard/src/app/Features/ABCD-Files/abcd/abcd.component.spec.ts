import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ABCDComponent } from './abcd.component';

describe('ABCDComponent', () => {
  let component: ABCDComponent;
  let fixture: ComponentFixture<ABCDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ABCDComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ABCDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
