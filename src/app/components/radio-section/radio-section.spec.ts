import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioSection } from './radio-section';

describe('RadioSection', () => {
  let component: RadioSection;
  let fixture: ComponentFixture<RadioSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RadioSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RadioSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
