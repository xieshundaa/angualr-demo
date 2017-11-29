import { Component, OnInit, ElementRef, HostListener } from '@angular/core';
import { EventBusService } from '../common/services/event-bus.service';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss']
})
export class TopMenuComponent implements OnInit {
  private isCollapsed = false;
  constructor(private elementRef: ElementRef, private eventBusService: EventBusService) { }

  ngOnInit() {
  }
  public onTogglerClick(event): void {
    this.isCollapsed = !this.isCollapsed;
    this.eventBusService.topToggleBtn.next(this.isCollapsed);
  }
}
