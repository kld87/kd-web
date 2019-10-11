import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageModalLinkComponent } from './image-modal-link.component';

describe('ImageModalLinkComponent', () => {
  let component: ImageModalLinkComponent;
  let fixture: ComponentFixture<ImageModalLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageModalLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageModalLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
