import { Component, OnInit, Input } from '@angular/core';
import {CdkDragDrop, CdkDrag, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-drag',
  templateUrl: './drag.component.html',
  styleUrls: ['./drag.component.scss']
})
export class DragComponent implements OnInit {

  @Input() dragItems;

  constructor() { }

  ngOnInit() {
  }

  drop(event: CdkDragDrop<string[]>) {
    // Preventor
    if (event.previousContainer === event.container) {
      return;
    }

    // Drop area returning
    const index = event.previousIndex;
    const data: any = event.previousContainer.data[index];

    // Find index in this one
    const myIndex = this.dragItems.findIndex(dragItem => dragItem.name === data.name);
    transferArrayItem(event.previousContainer.data,
      [],
      event.previousIndex,
      event.currentIndex);
  }

  specialUseCase(drag?: CdkDrag, drop?: any) {
    if (drop.data.length <= 2) {
      console.log("Can't drop you because there aren't enough items in 'Active'");
      return false;
    }
    const allowedItems = ['Item 5', 'Item 6', 'Item 7', 'Item 2'];
    if (allowedItems.indexOf(drag.data) === -1) {
      console.log("Can't drop you because only Item 2, 5, 6 and 7 are allowed here");
      return false;
    }
    return true;
  };

}
