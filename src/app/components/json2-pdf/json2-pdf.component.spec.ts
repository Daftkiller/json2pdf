import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Json2PdfComponent } from './json2-pdf.component';

describe('Json2PdfComponent', () => {
  let component: Json2PdfComponent;
  let fixture: ComponentFixture<Json2PdfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Json2PdfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Json2PdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
