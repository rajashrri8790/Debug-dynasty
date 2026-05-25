import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';

import { BaseChartDirective } from 'ng2-charts';

import {
  ChartConfiguration,
  ChartOptions
} from 'chart.js';

@Component({
  selector: 'app-revenue-chart',

  standalone: true,

  imports: [
    CommonModule,
    BaseChartDirective
  ],

  templateUrl: './revenue-chart.html',

  styleUrls: ['./revenue-chart.scss']
})

export class RevenueChart {

  // Chart Labels

  public barChartLabels: string[] = [

    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun'

  ];

  // Chart Data

  public barChartData:
  ChartConfiguration<'bar'>['data'] = {

    labels: this.barChartLabels,

    datasets: [

      {
        data: [50000, 75000, 62000, 90000, 120000, 150000],

        label: 'Monthly Revenue'
      }

    ]

  };

  // Chart Options

  public barChartOptions: ChartOptions<'bar'> = {

    responsive: true,

    plugins: {

      legend: {
        display: true
      }

    }

  };

}