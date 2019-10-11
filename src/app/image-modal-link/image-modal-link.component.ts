import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-image-modal-link',
  templateUrl: './image-modal-link.component.html',
  styleUrls: ['./image-modal-link.component.css']
})
export class ImageModalLinkComponent implements OnInit {
  @Input() image: string;
  @Input() alt: string;
  @Input() text: string;
  isOpen = false;

  constructor() { }

  ngOnInit() {
  }

  clicked(e: MouseEvent) {
    this.isOpen = true;
  }

}
