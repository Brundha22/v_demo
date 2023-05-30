import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookeventnextComponent } from './bookeventnext.component';

describe('BookeventnextComponent', () => {
  let component: BookeventnextComponent;
  let fixture: ComponentFixture<BookeventnextComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookeventnextComponent]
    });
    fixture = TestBed.createComponent(BookeventnextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
