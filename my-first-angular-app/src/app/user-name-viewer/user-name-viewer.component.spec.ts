import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserNameViewerComponent } from './user-name-viewer.component';

describe('UserNameViewerComponent', () => {
  let component: UserNameViewerComponent;
  let fixture: ComponentFixture<UserNameViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserNameViewerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserNameViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
