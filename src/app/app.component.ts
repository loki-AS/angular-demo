import { Steps } from './@types/Steps';
import { Component } from '@angular/core';
import { fcvTabs } from './constants/Tabs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  fcvTabs: Steps[] = fcvTabs;
}
