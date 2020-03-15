/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { News01Component } from './news01.component';

describe('News01Component', () => {
  let component: News01Component;
  let fixture: ComponentFixture<News01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ News01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(News01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
