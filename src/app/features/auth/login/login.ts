import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';

import {

  FormBuilder,

  Validators,

  FormGroup,

  ReactiveFormsModule

} from '@angular/forms';

import { Router } from '@angular/router';

import { RouterModule } from '@angular/router';

@Component({

  selector: 'app-login',

  standalone: true,

  imports: [

    CommonModule,

    ReactiveFormsModule,

    RouterModule

  ],

  templateUrl: './login.html',

  styleUrls: ['./login.scss']

})

export class Login {

  loginForm!: FormGroup;

  constructor(

    private fb: FormBuilder,

    private router: Router

  ) {

    // FORM INITIALIZATION

    this.loginForm = this.fb.group({

      email: [

        '',

        [Validators.required]

      ],

      password: [

        '',

        [Validators.required]

      ]

    });

  }

  login() {

    console.log(

      this.loginForm.value

    );

    this.router.navigate([
      '/customer-dashboard'
    ]);

  }

}