import { NgModule } from '@angular/core';

import {
  RouterModule,
  Routes
} from '@angular/router';


// Components

import { AdminDashboard }
from './admin-dashboard/admin-dashboard';

import { CustomerDashboard }
from './customer-dashboard/customer-dashboard';

import { RevenueChart }
from './revenue-chart/revenue-chart';


// Routes

const routes: Routes = [

  {
    path:'admin-dashboard',
    component: AdminDashboard
  },

  {
    path:'customer-dashboard',
    component: CustomerDashboard
  },

  {
    path:'revenue-chart',
    component: RevenueChart
  }

];

@NgModule({

  imports: [

    RouterModule.forChild(routes)

  ],

  exports: [

    RouterModule

  ]

})

export class DashboardRoutingModule { }