import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-feature-page',
  templateUrl: './app-feature-page.component.html',
  styleUrls: ['./app-feature-page.component.scss']
})
export class AppFeaturePageComponent {
  @Input() title: string = '';
}
