import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';


// Components

import { Login }
from './login/login';

import { Register }
from './register/register';

import { ForgotPasswordComponent }
from './forgot-password/forgot-password';


@NgModule({

  imports: [

    CommonModule,

    ReactiveFormsModule,

    RouterModule,

    // Standalone Components

    Login,

    Register,

    ForgotPasswordComponent

  ],

  exports: [

    Login,

    Register,

    ForgotPasswordComponent

  ]

})

export class AuthModule { }