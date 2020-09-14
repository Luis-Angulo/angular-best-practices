import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AccountMenuComponent } from "./account-menu/account-menu.component";
import { NavBarComponent } from "./navbar/nav-bar.component";
import { UserRepositoryService } from "./user-repository.service";
import { RouterModule } from "@angular/router";

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [AccountMenuComponent, NavBarComponent],
  providers: [UserRepositoryService],
  exports: [AccountMenuComponent, NavBarComponent]
})
export class CoreModule {}
