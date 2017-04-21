/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EnumerationsComponent } from './enumerations.component';

describe('EnumerationsComponent', () => {
  let component: EnumerationsComponent;
  let fixture: ComponentFixture<EnumerationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnumerationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnumerationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
