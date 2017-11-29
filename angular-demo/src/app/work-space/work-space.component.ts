import { Component, OnInit, ElementRef, HostListener } from '@angular/core';
import { LeftNavComponent } from '../left-nav/left-nav.component';
import { TopMenuComponent } from '../top-menu/top-menu.component';
import { EventBusService } from '../common/services/event-bus.service';
@Component({
  selector: 'app-work-space',
  templateUrl: './work-space.component.html',
  styleUrls: ['./work-space.component.scss']
})
export class WorkSpaceComponent implements OnInit {
  public isCollapsed = false;
  constructor(private elementRef: ElementRef, private eventBusService: EventBusService) { }

  ngOnInit() {
    this.eventBusService.topToggleBtn.subscribe(value => {
      this.toggleMenuStatus(value);
    });
  }
  private toggleMenuStatus(isCollapse: boolean): void {
    this.isCollapsed = isCollapse;
  }
}
