import { Component, OnInit, ViewChild, Input, ComponentFactoryResolver, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { BsModalService, ModalDirective } from 'ngx-bootstrap/modal';
import { DynamicComponent } from '../../utils/dynamic-content';
import { DynamicContentDirective } from '../../directives/dynamic-content.directive';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @ViewChild('Modal') modal: ModalDirective;
  isModalShown = false;
  isLoadContent = false;
  @Input() title: string;
  modalContent: DynamicComponent;
  component;
  @ViewChild(DynamicContentDirective) container: DynamicContentDirective;

  constructor(private modalService: BsModalService,
    private cd: ChangeDetectorRef,
    private componentFactoryResolver: ComponentFactoryResolver) {
    this.modalContent = new DynamicComponent();
  }

  ngOnInit() {
  }

  ngAfterViewChecked(): void {
    if (this.isLoadContent) {
      this.isLoadContent = false;
      this.modalContent.addComponent(this.container.viewContainerRef, this.componentFactoryResolver, this.component);
      this.cd.detectChanges();
    }
  }

  public showModal(component): void {
    this.component = component;
    this.isLoadContent = true;
    this.isModalShown = true;
  }

  hideModal(): void {
    this.isLoadContent = false;
    this.modalContent = new DynamicComponent();
    this.isModalShown = false;
    this.modal.hide();

  }

  onHidden(): void {
    this.isModalShown = false;
  }

}
