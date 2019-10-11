import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio-content',
  templateUrl: './portfolio-content.component.html',
  styleUrls: ['./portfolio-content.component.css']
})
export class PortfolioContentComponent implements OnInit {
  cards = [
    {
      image: 'ng-catering.png',
      header: 'ng-catering',
      title: 'Side Project',
      labels: ['Angular', 'Typescript'],
      description: 'A PoC Menu building app written in Angular + TypeScript, utilizing the Clarity Design UI framework. Build menus from dishes composed from ingredients. Idea being that a catering company would reuse dishes and menus between functions.',
      codeUrl: 'https://github.com/kld87/ng-catering',
      demoUrl: '//kevindawe.ca/ng-catering/'
    },
    {
      image: 'lgas.png',
      header: 'Leaflet Grid Analysis',
      title: 'Side Project',
      labels: ['Leaflet', 'JavaScript'],
      description: 'This project uses Leaflet, some native and 3rd-party controls, plus some custom code I\'ve written to create a fixed-length grid to perform performant point-to-point analysis, along with heatmap-inspired grid styling. Try zooming in/out, click some markers, then explore the control bar in the top right for more functionality and information.',
      codeUrl: 'https://github.com/kld87/leaflet-grid-analysis',
      demoUrl: '//kevindawe.ca/lgas/'
    },
    {
      image: 'rrs.png',
      header: 'React + Redux Sandbox',
      title: 'Side Project',
      labels: ['React', 'Redux'],
      description: 'An implementation of React + Redux, in particular as a means of using Redux to facilitate reusable components that maintain control of their own state, but could also share it elsewhere (without "lifting state up"). Mostly I just wanted to learn concepts and see what was possible.',
      codeUrl: 'https://github.com/kld87/react-redux-sandbox',
      demoUrl: '//kevindawe.ca/rrs/'
    },
    {
      image: 'angular-cli-sublime.png',
      header: 'Angular CLI for Sublime Text',
      title: 'Open Source Plugin',
      labels: ['Python'],
      description: 'I\'m a collaborator and contributor for a Sublime Text plugin which allows you to run ng cli commands from within the IDE. This includes running and killing "ng serve" respective to your host OS.',
      codeUrl: 'https://github.com/4ern/angular-cli-for-sublime-text',
      demoUrl: null,
      websiteUrl: 'https://packagecontrol.io/packages/Angular%20CLI'
    },
    {
      image: 'cws.png',
      header: 'CityWide Software',
      title: 'Professional Work',
      labels: ['PHP', 'AngularJS'],
      description: 'I played a major role in the development of the products listed under "Asset Management" at the last place I worked, PSD Research, Consulting, and Software.',
      codeUrl: null,
      demoUrl: null,
      websiteUrl: 'https://psdrcs.com/software/'
    },
    {
      image: 'jutter.png',
      header: 'JUTTER!', // note: special handling in the template
      title: 'Browser Game',
      labels: ['JavaScript'],
      description: 'A little HTML5 game I made ages ago, which happens to be my favourite hobby project from my old website. Give it a try and see how high of a score you can get!',
      codeUrl: 'https://github.com/kld87/jutter',
      demoUrl: '//kevindawe.ca/jutter.html'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
