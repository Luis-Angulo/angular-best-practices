import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoadingSpinnerComponent } from "./loading-spinner.component";

// Shared module is for any reusable components, directives and pipes
// If it starts getting too big and performance takes a hit, you can
// subdivide it further into specific shared modules
@NgModule({
  imports: [CommonModule],
  declarations: [LoadingSpinnerComponent],
  exports: [LoadingSpinnerComponent, CommonModule],
})
export class SharedModule {}
