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
    'm1',
    'm2',
    'm3',
    'm4'
  ];

  attributes = [
    'a1',
    'a2',
    'a3',
    'a4'
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
