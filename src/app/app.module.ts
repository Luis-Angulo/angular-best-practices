import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { HttpModule } from "@angular/http";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

import { appRoutes } from "./routes";
import { AppComponent } from "./app.component";
import { CatalogRepositoryService } from "./catalog/catalog-repository.service";
import { CoreModule } from "./core/core.module";
import { SharedModule } from "./shared/shared.module";
import { CatalogModule } from "./catalog/catalog.module";
import { UsersModule } from "./users/users.module";

@NgModule({
  imports: [
    BrowserModule,
    CoreModule,
    CatalogModule,
    SharedModule,
    HttpModule,
    FormsModule,
    UsersModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  declarations: [AppComponent],
  providers: [CatalogRepositoryService],
  bootstrap: [AppComponent],
})
export class AppModule {}
