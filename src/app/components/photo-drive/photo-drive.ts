import { Component } from '@angular/core';

@Component({
  selector: 'app-photo-drive',
  imports: [],
  templateUrl: './photo-drive.html',
  styleUrl: './photo-drive.scss'
})
export class PhotoDrive {
  driveUrl = 'https://drive.google.com/drive/folders/1Bjpl6t__N5OcT2Jf6apZc9Jq_KzknwZJ'; 

  accessDrive() {
    window.open(this.driveUrl, '_blank');
  }
}
