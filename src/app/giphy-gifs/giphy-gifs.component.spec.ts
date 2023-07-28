import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiphyGifsComponent } from './giphy-gifs.component';

describe('GiphyGifsComponent', () => {
  let component: GiphyGifsComponent;
  let fixture: ComponentFixture<GiphyGifsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GiphyGifsComponent]
    });
    fixture = TestBed.createComponent(GiphyGifsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
