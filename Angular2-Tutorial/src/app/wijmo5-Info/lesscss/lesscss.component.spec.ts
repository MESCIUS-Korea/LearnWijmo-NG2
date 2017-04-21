/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LesscssComponent } from './lesscss.component';

describe('LesscssComponent', () => {
  let component: LesscssComponent;
  let fixture: ComponentFixture<LesscssComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LesscssComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LesscssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
