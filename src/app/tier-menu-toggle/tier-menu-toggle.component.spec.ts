import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TierMenuToggleComponent } from './tier-menu-toggle.component';

describe('TierMenuToggleComponent', () => {
  let component: TierMenuToggleComponent;
  let fixture: ComponentFixture<TierMenuToggleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TierMenuToggleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TierMenuToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
