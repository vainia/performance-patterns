import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
} from '@angular/core';
import { List } from 'immutable';

import { EmployeeData } from '../shared/list-generator.service';

@Component({
  selector: 'app-employee-list',
  template: `
    <h1 title="Department">{{ department }}</h1>

    <app-name-input (add)="add.emit($event)"></app-name-input>

    <app-list [data]="data" (remove)="remove.emit($event)"></app-list>
  `,
  styleUrls: ['employee-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeListComponent {
  @Input() data: List<EmployeeData> | null = null;
  @Input() department: string = '';

  @Output() remove = new EventEmitter<EmployeeData>();
  @Output() add = new EventEmitter<string>();
}
