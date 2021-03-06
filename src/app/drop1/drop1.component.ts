import { Component, OnInit, Input } from '@angular/core';
import {CdkDragDrop, CdkDrag, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-drop1',
  templateUrl: './drop1.component.html',
  styleUrls: ['./drop1.component.scss']
})
export class Drop1Component implements OnInit {

  @Input() dragItems = [];

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
