import { Component } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  drag1 = [];
  drop1 = [];
  drop2 = [];
  flat = [
    'f1',
    'f2',
    'f3',
    'f4'
  ];
  metrics = [
    { type: 'metric', value: 23, name: 'm1' },
    { type: 'metric', value: 23, name: 'm2' },
    { type: 'metric', value: 23, name: 'm3' },
    { type: 'metric', value: 23, name: 'm4' },
  ];

  attributes = [
    { type: 'attribute', value: 56, name: 'a1' },
    { type: 'attribute', value: 34, name: 'a2' },
    { type: 'attribute', value: 66, name: 'a3' },
    { type: 'attribute', value: 345, name: 'a4' },
  ];
  title = 'dragdrop';

  drop(event: CdkDragDrop<string[]>) {
    console.log('drop', event);
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }
}
