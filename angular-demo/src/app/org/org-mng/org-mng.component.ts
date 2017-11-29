import { Component, OnInit } from '@angular/core';
import { fadeIn } from '../../animations/fade-in';
@Component({
  selector: 'app-org-mng',
  templateUrl: './org-mng.component.html',
  styleUrls: ['./org-mng.component.scss'],
  animations: [
    fadeIn
  ]
})
export class OrgMngComponent implements OnInit {
  public menus = [
    {
      name: '权限管理',
      isOpen: true,
      icon: 'anticon-user',
      childName: '组织架构',
      childIcon: 'fa-male',
      childRoute: 'user'
    }
  ];
  nodes = [
    {
      name: 'root1'
    },
    {
      name: 'root2'
    },
    {
      name: 'root3'
    },
    {
      name: 'root4',
      children: [
        { id: 2, name: 'child1' },
        { id: 3, name: 'child2' }
      ],
      hasChildren: true
    }
  ];
  options = {
    allowDrag: true
  };
  constructor() { }

  ngOnInit() {
  }


  onEvent(ev: any) {
    console.log('onEvent', ev);
    // console.log('onEvent', ev.node.data);
  }
}
