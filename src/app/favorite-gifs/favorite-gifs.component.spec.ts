import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteGifsComponent } from './favorite-gifs.component';

describe('FavoriteGifsComponent', () => {
  let component: FavoriteGifsComponent;
  let fixture: ComponentFixture<FavoriteGifsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FavoriteGifsComponent]
    });
    fixture = TestBed.createComponent(FavoriteGifsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
