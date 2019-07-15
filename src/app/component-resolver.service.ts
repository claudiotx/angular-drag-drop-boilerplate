import { Injectable } from '@angular/core';

import { ElementItem } from './item';
import { FancyElementComponent } from './fancy-element/fancy-element.component';
import { PrettyElementComponent } from './pretty-element/pretty-element.component';

@Injectable({
  providedIn: 'root'
})
export class ComponentResolverService {

  constructor() { }

  getFancyComponent(inputData: any) {
    return new ElementItem(FancyElementComponent, { name: 'Sample', bio: 'Brave as they come' } );
  }
}
