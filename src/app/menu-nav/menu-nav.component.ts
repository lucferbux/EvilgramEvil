import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {MatSnackBar} from '@angular/material';
import { AuthService } from '../core/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'menu-nav',
  templateUrl: './menu-nav.component.html',
  styleUrls: ['./menu-nav.component.css']
})
export class MenuNavComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  logged: Observable<Boolean>;
    
  constructor(private breakpointObserver: BreakpointObserver, private router:Router,  public auth: AuthService, public snackBar: MatSnackBar) {
    this.logged =  this.auth.user.pipe(
      map(user => !! user)      
    );

  }


  signOut() {
    this.auth.signOut();
    this.router.navigate(['/login']);
    this.openSnackBar("Has cerrado sesión");
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, "Ok", {
      duration: 2000,
    });
  }
  
  }
