import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio-content',
  templateUrl: './portfolio-content.component.html',
  styleUrls: ['./portfolio-content.component.css']
})
export class PortfolioContentComponent implements OnInit {
  cards = [
    {
      image: 'owasp.jpg',
      header: 'An Alternative Perspective to OWASP\'s Top 10',
      title: 'Medium Post',
      labels: ['Writing'],
      description: 'A 3-point alternative framework to OWASP\'s Top Ten web application security risks. Essentially just my take and guide on how to secure a web app, contrasted against OWASP. Published in Better Programming on Medium.',
      demoUrl: null,
      websiteUrl: 'https://medium.com/better-programming/a-3-point-alternative-to-owasps-top-10-security-risks-4e659d1b7b80?source=friends_link&sk=9d9dd6ae15da43364e5d42c10976f6ef'
    },
    {
      image: 'cryptolocker.jpg',
      header: 'How to protect against ransomware attacks',
      title: 'Medium Post',
      labels: ['Writing'],
      description: 'My first article on Medium about how to protect your organization from the growing threat of ransomware attacks, given my experience as a sysadmin.',
      demoUrl: null,
      websiteUrl: 'https://medium.com/@KevinDawe/how-to-protect-your-organization-from-the-growing-threat-of-ransomware-attacks-d2fd6588c92a?source=friends_link&sk=21cd9f897c9b7010de7e6834a2d3710e'
    },
    {
      image: 'mastermind.jpg',
      header: 'SUPER MASTERMIND!',
      title: 'Side Project',
      labels: ['React', 'TypeScript'],
      description: 'A browser-based implementation of Super Mastermind, a colour-combination-guessing puzzle game I loved as a kid. Try to guess the hidden pattern of colours before you run out of tries!',
      codeUrl: 'https://github.com/kld87/mastermind/',
      demoUrl: '//kevindawe.ca/mastermind/'
    },
    {
      image: 'sp.png',
      header: 'How to Ace a Technical Interview',
      title: 'Professional Work',
      labels: ['Writing'],
      description: 'A blog post I wrote for Scalable Path to serve as a guide for how to prepare for the technical aspect of job interviews in the tech sector. Check it out if you\'re in the process of applying, or are simply curious!',
      demoUrl: null,
      websiteUrl: 'https://www.scalablepath.com/blog/how-to-ace-technical-interview/'
    },
    {
      image: 'ng-catering.png',
      header: 'ng-catering',
      title: 'Side Project',
      labels: ['Angular', 'TypeScript'],
      description: 'A PoC Menu building app written in Angular + TypeScript, utilizing the Clarity Design UI framework. Build menus from dishes composed from ingredients. Idea being that a catering company would reuse dishes and menus between functions.',
      codeUrl: 'https://github.com/kld87/ng-catering/',
      demoUrl: '//kevindawe.ca/ng-catering/'
    },
    {
      image: 'lgas.png',
      header: 'Leaflet Grid Analysis',
      title: 'Side Project',
      labels: ['Leaflet', 'JavaScript'],
      description: 'This project uses Leaflet, some native and 3rd-party controls, plus some custom code I\'ve written to create a fixed-length grid to perform performant point-to-point analysis, along with heatmap-inspired grid styling. Try zooming in/out, click some markers, then explore the control bar in the top right for more functionality and information.',
      codeUrl: 'https://github.com/kld87/leaflet-grid-analysis/',
      demoUrl: '//kevindawe.ca/lgas/'
    },
    {
      image: 'rrs.png',
      header: 'React + Redux Sandbox',
      title: 'Side Project',
      labels: ['React', 'Redux'],
      description: 'An implementation of React + Redux, in particular as a means of using Redux to facilitate reusable components that maintain control of their own state, but could also share it elsewhere (without "lifting state up"). Mostly I just wanted to learn concepts and see what was possible.',
      codeUrl: 'https://github.com/kld87/react-redux-sandbox/',
      demoUrl: '//kevindawe.ca/rrs/'
    },
    {
      image: 'angular-cli-sublime.png',
      header: 'Angular CLI for Sublime Text',
      title: 'Open Source Plugin',
      labels: ['Python'],
      description: 'I\'m a collaborator and contributor for a Sublime Text plugin which allows you to run ng cli commands from within the IDE. This includes running and killing "ng serve" respective to your host OS.',
      codeUrl: 'https://github.com/4ern/angular-cli-for-sublime-text/',
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
      codeUrl: 'https://github.com/kld87/jutter/',
      demoUrl: '//kevindawe.ca/jutter.html'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
