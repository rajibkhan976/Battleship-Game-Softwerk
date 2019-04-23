import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayeronepositionComponent } from './playeroneposition.component';

describe('PlayeronepositionComponent', () => {
  let component: PlayeronepositionComponent;
  let fixture: ComponentFixture<PlayeronepositionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayeronepositionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayeronepositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
