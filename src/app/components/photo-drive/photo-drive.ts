import { Component } from '@angular/core';

@Component({
  selector: 'app-photo-drive',
  imports: [],
  templateUrl: './photo-drive.html',
  styleUrl: './photo-drive.scss'
})
export class PhotoDrive {
  driveUrl = 'https://drive.google.com/drive/folders/sua-pasta-fotos'; 

  accessDrive() {
    window.open(this.driveUrl, '_blank');
  }
}
