import {
  Component,
  Input,
  AfterContentInit,
  TemplateRef,
  ContentChildren,
  QueryList,
} from '@angular/core';
import { Steps } from 'src/app/@types/Steps';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css'],
})
export class TabsComponent implements AfterContentInit {
  @Input() steps: Steps[] = [];
  @Input() activeIndex: number = 0;
  @Input() isSubTab: boolean = false;

  activeStep!: Steps;

  tabContentMap = new Map<Steps, TemplateRef<any>>();

  @ContentChildren('tabContent') tabContents!: QueryList<TemplateRef<any>>;

  constructor() {}

  ngAfterContentInit() {
    if (this.steps && this.steps.length > 0) {
      this.activeStep = this.activeIndex
        ? this.steps[this.activeIndex]
        : this.steps[0];
    }

    this.tabContents.forEach((tabContent: TemplateRef<any>, index: number) => {
      const step = this.steps[index];
      if (step) {
        this.tabContentMap.set(step, tabContent);
      }
    });
  }

  selectTab(step: Steps) {
    this.activeStep = step;
  }

  getTabContent(step: Steps): TemplateRef<any> | null {
    return this.tabContentMap.get(step) || null;
  }
}
