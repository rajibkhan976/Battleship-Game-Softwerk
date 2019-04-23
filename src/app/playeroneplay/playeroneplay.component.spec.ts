import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayeroneplayComponent } from './playeroneplay.component';

describe('PlayeroneplayComponent', () => {
  let component: PlayeroneplayComponent;
  let fixture: ComponentFixture<PlayeroneplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayeroneplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayeroneplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
