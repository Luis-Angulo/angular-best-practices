import { NgModule } from "@angular/core";
import { SharedModule } from "app/shared/shared.module";
import { RegisterComponent } from "./register.component";
import { SignInComponent } from "./sign-in.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

@NgModule({
  imports: [
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: "register", component: RegisterComponent },
      { path: "sign-in", component: SignInComponent },
    ]),
  ],
  declarations: [RegisterComponent, SignInComponent],
  exports: [RegisterComponent, SignInComponent],
})
export class UsersModule {}
