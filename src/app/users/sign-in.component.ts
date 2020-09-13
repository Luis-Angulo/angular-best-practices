import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { DataRepositoryService } from '../services/data-repository.service';

@Component({
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent {
  credentials: any = {};

  constructor(
    private router: Router,
    private dataRepository: DataRepositoryService
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
