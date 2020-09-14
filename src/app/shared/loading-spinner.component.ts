import { Component } from '@angular/core';

@Component({
  selector: "shared-loading-spinner",
  template: '<img *ngIf="loading" src="../../assets/images/loading.gif" />',
  inputs: ['loading'],
})
export class LoadingSpinnerComponent {
  loading: boolean;
}
