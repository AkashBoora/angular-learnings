import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  selectedFeature: string = 'recipe';
  title = 'app-project';
  onNavigate(feature: string) {
    this.selectedFeature = feature;
  }
}
