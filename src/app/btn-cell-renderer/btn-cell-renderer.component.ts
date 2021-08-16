import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';

@Component({
  selector: 'app-button-renderer',
  template: `
    <button mat-icon-button color="warn" (click)="onClick($event)">
      <mat-icon>delete</mat-icon>
    </button>
  `,
})
export class ButtonRendererComponent implements ICellRendererAngularComp {
  params;
  label: string = 'Effacer';

  agInit(params): void {
    this.params = params;
    this.label = this.params.label || null;
  }

  refresh(params?: any): boolean {
    return true;
  }

  onClick($event) {
    if (this.params.onClick instanceof Function) {
      const params = {
        event: $event,
        rowData: this.params.node.data,
      };
      this.params.onClick(params);
    }
  }
}
