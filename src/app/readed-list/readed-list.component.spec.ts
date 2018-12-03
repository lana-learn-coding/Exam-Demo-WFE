import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadedListComponent } from './readed-list.component';

describe('ReadedListComponent', () => {
  let component: ReadedListComponent;
  let fixture: ComponentFixture<ReadedListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadedListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
