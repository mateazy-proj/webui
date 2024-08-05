import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgUploaderCellComponent } from './img-uploader-cell.component';

describe('ImgUploaderCellComponent', () => {
  let component: ImgUploaderCellComponent;
  let fixture: ComponentFixture<ImgUploaderCellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ImgUploaderCellComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImgUploaderCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
