import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SizeValveTabsComponent } from './size-valve-tabs/size-valve-tabs.component';
import { CommonComponentsModule } from '../common-components/common-components.module';
import { SizingInputComponent } from './sizing-input/sizing-input.component';
import { SizingOptionsComponent } from './sizing-option/sizing-option.component';
import { SizingOutputComponent } from './sizing-output/sizing-output.component';
import { RegulatorCatalogComponent } from './regulator-catalog/regulator-catalog.component';
import { BaseChartDirective } from 'ng2-charts';
import { ValveTableComponent } from './valve-table/valve-table.component';

@NgModule({
  declarations: [
    SizeValveTabsComponent,
    SizingInputComponent,
    SizingOptionsComponent,
    SizingOutputComponent,
    RegulatorCatalogComponent,
    ValveTableComponent,
  ],
  imports: [CommonModule, CommonComponentsModule, BaseChartDirective],
  exports: [SizeValveTabsComponent],
})
export class ComponentsModule {}
