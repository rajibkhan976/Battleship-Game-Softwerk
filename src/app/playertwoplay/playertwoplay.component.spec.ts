import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayertwoplayComponent } from './playertwoplay.component';

describe('PlayertwoplayComponent', () => {
  let component: PlayertwoplayComponent;
  let fixture: ComponentFixture<PlayertwoplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayertwoplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayertwoplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
