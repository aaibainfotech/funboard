import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbcdWordsComponent } from './abcd-words.component';

describe('AbcdWordsComponent', () => {
  let component: AbcdWordsComponent;
  let fixture: ComponentFixture<AbcdWordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AbcdWordsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbcdWordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
