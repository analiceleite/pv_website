import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoDrive } from './photo-drive';

describe('PhotoDrive', () => {
  let component: PhotoDrive;
  let fixture: ComponentFixture<PhotoDrive>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhotoDrive]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotoDrive);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
