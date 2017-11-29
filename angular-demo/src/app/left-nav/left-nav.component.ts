import { Component, OnInit, ElementRef, HostListener, Input } from '@angular/core';
import { EventBusService } from '../common/services/event-bus.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-left-nav',
  templateUrl: './left-nav.component.html',
  styleUrls: ['./left-nav.component.scss']
})
export class LeftNavComponent implements OnInit {
  public menus = [
    {
      id: '1',
      name: '权限管理',
      isOpen: true,
      icon: 'anticon-user',
      children: [
        { name: '组织架构', icon: 'fa-male', route: 'org/orgmng' },
        { name: '用户管理', icon: 'fa-bug', route: 'user' },
        { name: '角色管理', icon: 'fa-bus', route: 'role/roletable/page/1' },
        { name: '权限管理', icon: 'fa-send', route: 'permission/permissiontable/page/1' }
      ]
    },
    {
      id: '2',
      name: '内容管理',
      isOpen: false,
      icon: 'anticon-team',
      children: [
        { name: '文章管理', icon: 'fa-mobile', route: 'post/posttable/page/1' },
        { name: '评论管理', icon: 'fa-minus', route: 'comment/commenttable/page/1' }
      ]
    },
    {
      id: '3',
      name: '系统监控',
      isOpen: false,
      icon: 'anticon-file',
      children: [
        { name: '系统状态', icon: 'fa-line-chart', route: 'sys/sysmonitor' },
        { name: '高德地图', icon: 'fa-map-marker', route: 'map/map' }
      ]
    }
  ];
  public isCollapsed = false;
  constructor(private elementRef: ElementRef, private eventBusService: EventBusService) { }

  ngOnInit() {
    this.eventBusService.topToggleBtn.subscribe(value => {
      this.toggleMenuAll(value);
  });
  }
  private toggleMenuAll(isCollapse: boolean): void {

    this.isCollapsed = isCollapse;
    // console.log(this.isCollapsed);
    // this.menus.forEach(item => {
    //   item.isOpen = false;
    // });
  }
}
