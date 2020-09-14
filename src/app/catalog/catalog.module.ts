import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { CatalogComponent } from './catalog.component';
import { CatalogRepositoryService } from './catalog-repository.service';

@NgModule({
  imports: [
    SharedModule,
    RouterModule
  ],
  declarations: [CatalogComponent],
  providers: [CatalogRepositoryService],
  exports: []
})
export class CatalogModule { }
