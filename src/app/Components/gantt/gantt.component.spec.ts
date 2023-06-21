import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GanttsComponent } from './gantt.component';

describe('GanttComponent', () => {
  let component: GanttsComponent;
  let fixture: ComponentFixture<GanttsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GanttsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GanttsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
