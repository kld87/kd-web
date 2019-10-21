import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA} from '@angular/core';

import { IconBarComponent } from './icon-bar.component';

describe('IconBarComponent', () => {
  let component: IconBarComponent;
  let fixture: ComponentFixture<IconBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconBarComponent ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
