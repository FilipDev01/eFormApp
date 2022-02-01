import { Component, OnInit } from '@angular/core';
import { GlobalConstants } from 'src/app/common/global-constants';

import * as $ from "jquery";

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}

export const ROUTES: RouteInfo[] = [
  { path: '/dashboard', title: 'Prehľad', icon: 'dashboard', class: 'primary' },
  { path: '/agents', title: 'Agenti', icon: 'person', class: 'primary' },
  { path: '/agent/:agentId', title: 'Agent', icon: 'person', class: 'primary' },
  // { path: '/table-list', title: 'Table List', icon: 'content_paste', class: '' },
  // { path: '/typography', title: 'Typography', icon: 'library_books', class: '' },
  // { path: '/icons', title: 'Icons', icon: 'bubble_chart', class: '' },
  // { path: '/maps', title: 'Maps', icon: 'location_on', class: '' },
  // { path: '/notifications', title: 'Notifications', icon: 'notifications', class: '' }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})

export class SidebarComponent implements OnInit {
  public menuItems: any = new Array<any>();

  constructor() { }

  ngOnInit() {
    const availableRoutes = this.setAvailabeRoutes();
    this.menuItems = availableRoutes.filter(menuItem => menuItem);
  }

  isMobileMenu() {
    const winWidth = !!$(window) ? $(window).width() : 0
    return !!winWidth && winWidth <= 991;
  };


  setAvailabeRoutes(): Array<RouteInfo> {
    const routes = new Array<RouteInfo>();
    if (Array.isArray(GlobalConstants.currentUserGroups) && GlobalConstants.currentUserGroups.includes('admin')) {
      routes.push({ path: '/agents', title: 'Agenti', icon: 'supervisor_account', class: 'primary' });
    } else {
      routes.push({ path: `/agent/${GlobalConstants.selectedAgent.username}`, title: 'Agent', icon: 'person', class: 'primary' });
    }

    return routes;
  }
}