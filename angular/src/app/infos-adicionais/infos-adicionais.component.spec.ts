import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfosAdicionaisComponent } from './infos-adicionais.component';

describe('InfosAdicionaisComponent', () => {
  let component: InfosAdicionaisComponent;
  let fixture: ComponentFixture<InfosAdicionaisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfosAdicionaisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfosAdicionaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
