import { Component } from '@angular/core';

@Component({
  selector: 'app-user-name-viewer',
  templateUrl: './user-name-viewer.component.html',
  styleUrls: ['./user-name-viewer.component.css'],
})
export class UserNameViewerComponent {
  userName = '';
  resetUserName() {
    this.userName = '';
  }
}
