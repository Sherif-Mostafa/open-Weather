import { ViewContainerRef, ComponentFactoryResolver } from '@angular/core';


export class DynamicComponent {
    constructor() {

    }

    addComponent(container: ViewContainerRef, componentFactoryResolver: ComponentFactoryResolver, component) {
        const componentFactory = componentFactoryResolver.resolveComponentFactory(component);
        container.clear();
        const componentRef = container.createComponent(componentFactory);
    }

}
