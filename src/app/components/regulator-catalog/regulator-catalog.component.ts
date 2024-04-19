import { Component } from '@angular/core';
import { ChartType } from 'chart.js';

@Component({
  selector: 'app-regulator-catalog',
  templateUrl: './regulator-catalog.component.html',
  styleUrls: [],
})
export class RegulatorCatalogComponent {
  lineChartData = [
    {
      data: [0, 50, 100, 150, 200, 250, 300, 350, 100, 450, 500],
      borderColor: 'blue',
      pointBackgroundColor: [
        'red',
        'green',
        'blue',
        'orange',
        'purple',
        'yellow',
        'cyan',
      ],
    },
  ];
  lineChartLabels = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90];
  lineChartOptions = {
    responsive: true,
    lineTension: 0.2,
  };
  lineChartType: ChartType = 'line';
  lineChartLegend = false;
}
