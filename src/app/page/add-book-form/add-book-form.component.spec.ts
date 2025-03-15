import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBookFormComponent } from './add-book-form.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ViewBookComponent } from '../view-book/view-book.component';

describe('AddBookFormComponent', () => {
  let component: AddBookFormComponent;
  let fixture: ComponentFixture<AddBookFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddBookFormComponent,RouterLink ,ViewBookComponent,RouterOutlet]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddBookFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
