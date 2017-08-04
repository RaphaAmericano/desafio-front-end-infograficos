import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleMapsContainerComponent } from './google-maps-container.component';

describe('GoogleMapsContainerComponent', () => {
  let component: GoogleMapsContainerComponent;
  let fixture: ComponentFixture<GoogleMapsContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoogleMapsContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleMapsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
