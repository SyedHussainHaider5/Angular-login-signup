import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomedisplayComponent } from './homedisplay.component';

describe('HomedisplayComponent', () => {
  let component: HomedisplayComponent;
  let fixture: ComponentFixture<HomedisplayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomedisplayComponent]
    });
    fixture = TestBed.createComponent(HomedisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
