import { Component } from '@angular/core';
import { User } from './models/user';
import { Router } from '@angular/router';
import { HandleUserService } from './services/handle-user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  currentUser: User;

  constructor(
    private router: Router,
    private handleUserService: HandleUserService,
  ) {
    this.handleUserService.currentUser.subscribe(x => {
      this.currentUser = x;
     });
  }

  logout() {
    this.handleUserService.logout();
    this.router.navigate(['/']);
  }
}
