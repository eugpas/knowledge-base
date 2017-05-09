import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { User } from '../classes/user.class';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent{
  title = 'Wot-stats app running...';
  userId = null;
  users = null;

  constructor(private router: Router, private userService: UserService) {
  }

  getUserList(): void {
    this.userService.getSuggestedUsers(this.userId).then(res => {
      this.users = res;
    });
  }
  gotoUserDetails(user?: User): void {
    this.router.navigate(['/user', user.account_id]);
    this.users = null;
  }
}
