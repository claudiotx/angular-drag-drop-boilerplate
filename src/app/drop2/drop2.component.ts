import { Component, OnInit, Input, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { CdkDragDrop, CdkDrag, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

import { ComponentResolverService } from '../component-resolver.service';
import { ElementItem } from '../item';

@Component({
  selector: 'app-drop2',
  templateUrl: './drop2.component.html',
  styleUrls: ['./drop2.component.scss']
})
export class Drop2Component implements OnInit {
  @Input() dragItems;
  public myComponents: ElementItem[] = [];

  constructor(
    private componentResolverService: ComponentResolverService,
    private componentFactoryResolver: ComponentFactoryResolver
    ) { }

  ngOnInit() {
  }

  drop(event: CdkDragDrop<string[]>) {
    const index = event.previousIndex;
    const data = event.previousContainer.data[index];
    this.dragItems.push(data);

    // Use factory
    const newComponent: ElementItem = this.componentResolverService.getFancyComponent(data);
    this.myComponents.push(newComponent);
    this.componentFactoryResolver.resolveComponentFactory(newComponent);
    // if (event.previousContainer === event.container) {
    //   moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    // } else {
    //   transferArrayItem(event.previousContainer.data,
    //                     event.container.data,
    //                     event.previousIndex,
    //                     event.currentIndex);
    // }
  }

}
