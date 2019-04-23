import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayertwopositionComponent } from './playertwoposition.component';

describe('PlayertwopositionComponent', () => {
  let component: PlayertwopositionComponent;
  let fixture: ComponentFixture<PlayertwopositionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayertwopositionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayertwopositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
