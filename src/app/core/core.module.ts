import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AccountMenuComponent } from "./account-menu/account-menu.component";
import { NavBarComponent } from "./navbar/nav-bar.component";
import { UserRepositoryService } from "./user-repository.service";
import { RouterModule } from "@angular/router";

// Core module should implement all cross-cutting concerns for an app, such as
// custom error handlers, auth interceptors, logging services, and wrappers around
// core angular libraries. CoreModule should only be imported into the root appModule
@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [AccountMenuComponent, NavBarComponent],
  providers: [UserRepositoryService],
  exports: [AccountMenuComponent, NavBarComponent]
})
export class CoreModule {}
