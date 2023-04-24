import { Component } from '@angular/core';

@Component({
  selector: 'app-assignment-three',
  templateUrl: './assignment-three.component.html',
  styleUrls: ['./assignment-three.component.css'],
})
export class AssignmentThreeComponent {
  showSecret = false;
  logs = [];
  updateShowSecret() {
    this.showSecret = !this.showSecret;
    this.logs.push(this.logs.length + 1);
  }
}
