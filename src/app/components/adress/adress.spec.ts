import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Adress } from './adress';

describe('Adress', () => {
  let component: Adress;
  let fixture: ComponentFixture<Adress>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Adress]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Adress);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
