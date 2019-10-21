import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-portfolio-card',
  templateUrl: './portfolio-card.component.html',
  styleUrls: ['./portfolio-card.component.css']
})
export class PortfolioCardComponent implements OnInit {
  @Input() card: any; //TODO: make into a class

  constructor() { }

  ngOnInit() {
  }

}
