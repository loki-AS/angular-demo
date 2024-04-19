import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { TabsComponent } from './tabs/tabs.component';

@NgModule({
  declarations: [HeaderComponent, TopBarComponent, TabsComponent],
  imports: [CommonModule],
  exports: [HeaderComponent, TopBarComponent, TabsComponent],
})
export class CommonComponentsModule {}
