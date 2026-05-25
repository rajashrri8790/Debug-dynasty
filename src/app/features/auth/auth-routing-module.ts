import { NgModule } from '@angular/core';

import {
  RouterModule,
  Routes
} from '@angular/router';


// Components

import { Login }
from './login/login';

import { Register }
from './register/register';

import { ForgotPasswordComponent }
from './forgot-password/forgot-password';


// Routes

const routes: Routes = [

  // Login Route

  {
    path: 'login',
    component: Login
  },

  // Register Route

  {
    path: 'register',
    component: Register
  },

  // Forgot Password Route

  {
    path: 'forgot-password',
    component: ForgotPasswordComponent
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

export class AuthRoutingModule { }