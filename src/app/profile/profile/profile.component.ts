import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user: User = new User;

  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.auth.me().subscribe(payload => this.user = payload.data.user);
  }

}
