import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public navigation = [
    {
      path: '',
      name: 'Панель управления'
    },
    {
      path: 'products',
      name: 'Продукты'
    }
  ];

  constructor() { }

  combinePath(path) {
    return path === '' ? '/admin' : '/admin/' + path;
  }

  ngOnInit() {
  }

}
