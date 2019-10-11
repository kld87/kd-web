import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationEnd, NavigationError } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'kevindawe.ca';
  year = new Date().getFullYear();

  navs = [
    {route: '/about', label: 'About'},
    {route: '/portfolio', label: 'Portfolio'},
    {route: '/experience', label: 'Experience'},
    {route: '/blog', label: 'Blog'},
    {route: '/contact', label: 'Contact'},
  ];
  activeRoute;

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe((e: Event) => {
      if (e instanceof NavigationEnd) {
        // only match first part of the route re: list/detail drilldown
        this.activeRoute = '/' + e.urlAfterRedirects.split('/')[1];
        // scroll to top since sometimes it maintains scroll position between nav
        document.getElementById('content-root').scrollTop = 0;
      } else if (e instanceof NavigationError) {
        console.log(e.error);
      }
    });
  }
}
