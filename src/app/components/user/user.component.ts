import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { UserService } from '../../services/user.service';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-user',
  template: `
    <h1>{{title}}</h1>
    <md-card *ngIf="user">User rating: {{user.global_rating}}</md-card>
  `
})

export class UserComponent implements OnInit {
  private userId: number;
  public user: object;
  title = 'User component';

  constructor(
    private userService: UserService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => this.userId = params['uid']);
    this.route.params
      .switchMap((params: Params) => this.userService.getUser(params['uid']))
      .subscribe((user => {
        this.user = user[this.userId];
        console.log('user: ', this.user);
      }));
  }

}
