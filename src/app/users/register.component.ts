import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { UserRepositoryService } from "app/core/user-repository.service";

@Component({
  styleUrls: ["./register.component.css"],
  templateUrl: "./register.component.html",
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  firstName: FormControl;
  lastName: FormControl;
  email: FormControl;
  password: FormControl;
  saving = false;

  constructor(
    private router: Router,
    private userRepository: UserRepositoryService
  ) {}

  ngOnInit() {
    this.firstName = new FormControl("", Validators.required);
    this.lastName = new FormControl("", Validators.required);
    this.email = new FormControl("", Validators.required);
    this.password = new FormControl("", Validators.required);

    this.registerForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      password: this.password,
    });
  }

  // methods called by the template must remain public
  registerUser(user) {
    this.saving = true;
    this.saveAndRedirect(user);
  }

  cancel() {
    this.router.navigate(["/"]);
  }

  // private methods should go last in a class
  private saveAndRedirect(user) {
    this.userRepository.saveUser(user).subscribe(
      null,
      () => (this.saving = false),
      () => this.router.navigate(["/catalog"])
    );
  }
}
