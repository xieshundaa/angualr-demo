import { Component, OnInit } from '@angular/core';
import { fadeIn } from '../../animations/fade-in';
@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss'],
  animations: [
    fadeIn
  ]
})
export class UserTableComponent implements OnInit {
  _allChecked = false;
  _indeterminate = false;
  _displayData = [];
  filterNameArray = [
    { name: 'Joe', value: false },
    { name: 'Jim', value: false },
  ];
  filterAddressArray = [
    { name: 'London', value: false },
    { name: 'Sidney', value: false }
  ];
  sortMap = {
    name   : null,
    age    : null,
    address: null
  };
  sortName = null;
  sortValue = null;
  data = [ {
    key    : '1',
    name   : 'John Brown',
    age    : 32,
    address: 'New York No. 1 Lake Park',
  }, {
    key    : '2',
    name   : 'Jim Green',
    age    : 42,
    address: 'London No. 1 Lake Park',
  }, {
    key    : '3',
    name   : 'Joe Black',
    age    : 32,
    address: 'Sidney No. 1 Lake Park',
  } ,
  {
    key    : '4',
    name   : 'John Brown',
    age    : 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key    : '5',
    name   : 'John Brown',
    age    : 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key    : '6',
    name   : 'John Brown',
    age    : 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key    : '7',
    name   : 'John Brown',
    age    : 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key    : '8',
    name   : 'John Brown',
    age    : 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key    : '9',
    name   : 'John Brown',
    age    : 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key    : '10',
    name   : 'John Brown',
    age    : 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key    : '11',
    name   : 'John Brown',
    age    : 32,
    address: 'New York No. 1 Lake Park',
  }];
  copyData = [ ...this.data ];
  public menus = [
    {
      name: '权限管理',
      isOpen: true,
      icon: 'anticon-user',
      childName: '用户管理',
      childIcon: 'fa-bug',
      childRoute: 'user'
    }
  ];
  constructor() { }

  ngOnInit() {
  }
  sort(sortName, value) {
    this.sortName = sortName;
    this.sortValue = value;
    Object.keys(this.sortMap).forEach(key => {
      if (key !== sortName) {
        this.sortMap[ key ] = null;
      } else {
        this.sortMap[ key ] = value;
      }
    });
    this.search();
  }
  search() {
    const searchAddress = this.filterAddressArray.filter(address => address.value);
    const searchName = this.filterNameArray.filter(name => name.value);
    const filterFunc = (item) => {
      return (searchAddress.length ? searchAddress.some(address => item.address.indexOf(address.name) !== -1) : true) &&
        (searchName.length ? searchName.some(name => item.name.indexOf(name.name) !== -1) : true);
    };
    this.data = [ ...this.copyData.filter(item => filterFunc(item)) ];
    this.data = [ ...this.data.sort((a, b) => {
      if (a[ this.sortName ] > b[ this.sortName ]) {
        return (this.sortValue === 'ascend') ? 1 : -1;
      } else if (a[ this.sortName ] < b[ this.sortName ]) {
        return (this.sortValue === 'ascend') ? -1 : 1;
      } else {
        return 0;
      }
    }) ];
  }
  _displayDataChange($event) {
    this._displayData = $event;
    this._refreshStatus();
  }

  _refreshStatus() {
    const allChecked = this._displayData.every(value => value.checked === true);
    const allUnChecked = this._displayData.every(value => !value.checked);
    this._allChecked = allChecked;
    this._indeterminate = (!allChecked) && (!allUnChecked);
  }

  _checkAll(value) {
    if (value) {
      this._displayData.forEach(data => {
        data.checked = true;
      });
    } else {
      this._displayData.forEach(data => {
        data.checked = false;
      });
    }
    this._refreshStatus();
  }
}
