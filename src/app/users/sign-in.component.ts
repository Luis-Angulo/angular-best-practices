import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { UserRepositoryService } from './user-repository.service';

@Component({
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent {
  credentials: any = {};

  constructor(
    private router: Router,
    private dataRepository: UserRepositoryService
  ) {}

  signIn(credentials: any) {
    this.dataRepository.signIn(credentials).subscribe(
      null,
      (err) => {
        console.error(err, 'Error');
      },
      () => this.router.navigate(['/catalog'])
    );
  }

  cancel() {
    this.router.navigate(['/']);
  }
}
