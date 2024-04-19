import { Component } from '@angular/core';
import { Steps } from 'src/app/@types/Steps';
import { sizeValveTabs } from 'src/app/constants/Tabs';

@Component({
  selector: 'app-size-valve-tabs',
  templateUrl: './size-valve-tabs.component.html',
  styleUrls: ['./size-valve-tabs.component.css'],
})
export class SizeValveTabsComponent {
  sizeValveTabs: Steps[] = sizeValveTabs;
}
