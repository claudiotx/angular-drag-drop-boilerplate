import { Component, OnInit, Input } from '@angular/core';
import {CdkDragDrop, CdkDrag, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-drag1',
  templateUrl: './drag1.component.html',
  styleUrls: ['./drag1.component.scss']
})
export class Drag1Component implements OnInit {

  @Input() dragItems;

  constructor() { }

  ngOnInit() {
  }

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
