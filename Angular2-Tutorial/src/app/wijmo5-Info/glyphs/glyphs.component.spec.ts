/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GlyphsComponent } from './glyphs.component';

describe('GlyphsComponent', () => {
  let component: GlyphsComponent;
  let fixture: ComponentFixture<GlyphsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlyphsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlyphsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
