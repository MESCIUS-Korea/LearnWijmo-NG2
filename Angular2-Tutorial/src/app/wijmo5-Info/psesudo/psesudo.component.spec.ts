/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PsesudoComponent } from './psesudo.component';

describe('PsesudoComponent', () => {
  let component: PsesudoComponent;
  let fixture: ComponentFixture<PsesudoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PsesudoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PsesudoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
