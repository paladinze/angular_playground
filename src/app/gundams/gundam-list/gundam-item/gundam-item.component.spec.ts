import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GundamItemComponent } from './gundam-item.component';

describe('GundamItemComponent', () => {
  let component: GundamItemComponent;
  let fixture: ComponentFixture<GundamItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GundamItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GundamItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
