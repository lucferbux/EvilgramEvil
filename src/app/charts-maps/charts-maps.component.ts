import { Component, OnInit } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { single } from './data';

@Component({
  selector: 'app-charts-maps',
  templateUrl: './charts-maps.component.html',
  styleUrls: ['./charts-maps.component.css']
})
export class ChartsMapsComponent {

  single: any[];




  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Incidencias';
  showYAxisLabel = true;
  yAxisLabel = 'Meses';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor() {
    this.single = single;
  }

  onSelect(event) {
    
  }
}
