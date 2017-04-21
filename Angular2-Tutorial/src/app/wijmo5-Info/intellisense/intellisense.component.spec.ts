/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { IntellisenseComponent } from './intellisense.component';

describe('IntellisenseComponent', () => {
  let component: IntellisenseComponent;
  let fixture: ComponentFixture<IntellisenseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntellisenseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntellisenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
