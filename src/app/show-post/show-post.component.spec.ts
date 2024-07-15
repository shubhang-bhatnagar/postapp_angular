import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPostComponet } from './show-post.component';

describe('ShowPostComponent', () => {
  let component: ShowPostComponet;
  let fixture: ComponentFixture<ShowPostComponet>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShowPostComponet]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowPostComponet);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
