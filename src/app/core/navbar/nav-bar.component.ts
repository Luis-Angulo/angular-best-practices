import { Component } from "@angular/core";

import { UserRepositoryService } from "../user-repository.service";

@Component({
  selector: "nav-bar",
  templateUrl: "nav-bar.component.html",
  styleUrls: ["./nav-bar.component.css"],
})
export class NavBarComponent {
  constructor(private dataRepository: UserRepositoryService) {}

  get currentUser() {
    return this.dataRepository.currentUser;
  }

  handleSignOut() {
    this.dataRepository.currentUser = null;
  }
}
