import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamiliarGroups } from './familiar-groups';

describe('FamiliarGroups', () => {
  let component: FamiliarGroups;
  let fixture: ComponentFixture<FamiliarGroups>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FamiliarGroups]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FamiliarGroups);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
