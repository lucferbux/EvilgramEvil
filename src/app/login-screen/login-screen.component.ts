import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/auth.service';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import {MatSnackBar} from '@angular/material';
import { NotifyService } from '../core/notify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.css']
})
export class LoginScreenComponent implements OnInit {

  userForm: FormGroup;

  constructor(public auth: AuthService ,private router:Router , private fb: FormBuilder, public snackBar: MatSnackBar, public notify: NotifyService) {
    this.notify.logginStatus.subscribe(
      (status: Boolean) =>  {
        this.openSnackBar(status);
        this.router.navigate(['/map']);
      }
    );
   }

  ngOnInit() {
    this.userForm = this.fb.group({
          email: ['', [Validators.required,
                        Validators.email ]
        ],
          password: ['', [Validators.required, 
                        Validators.min(6),
                        Validators.max(25)]],
    })
  }

  login(): void {
    this.auth.emailLoginForm(this.userForm.value);
  }

  async submitHandler() {
    const formValue = this.userForm.value;
    try {
      await this.auth.emailLoginForm(formValue);
      console.log("llego a succes true")
    } catch(err) {
      console.log(err)
    }
    
  }

  openSnackBar(status: Boolean) {
    var message = status ? "Usuario identificado correctamente" : "Error al identificar usuario";
    this.snackBar.open(message, "Ok", {
      duration: 2000,
    });
  }

}
