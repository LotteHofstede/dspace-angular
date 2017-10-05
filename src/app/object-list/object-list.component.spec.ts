import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { ObjectListComponent } from '../shared/object-list/object-list.component';
import { Observable } from 'rxjs/Observable';
import { PaginatePipe, PaginationService } from 'ngx-pagination';

describe('ObjectListComponent', () => {
  let comp: ObjectListComponent;
  let fixture: ComponentFixture<ObjectListComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ObjectListComponent, PaginatePipe],
      providers: [PaginationService],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjectListComponent);
    comp = fixture.componentInstance; // ObjectListComponent test instance
    de = fixture.debugElement.query(By.css('ds-pagination'));
    el = de.nativeElement;
  });

  it('should contain list elements when there are objects', () => {
    (comp as any).objects = {
      hasSucceeded: Observable.of(true),
      payload: Observable.of(['test', 'string'])
    };
    fixture.detectChanges();
    const list: HTMLElement = de.query(By.css('ul')).nativeElement;
    expect(list).not.toBeNull();
    expect(list.hasChildNodes()).toBe(true);

  });

  it('should not contain list elements when there are no objects', () => {
    (comp as any).objects = {
      hasSucceeded: Observable.of(true),
      payload: Observable.of([])
    }
    fixture.detectChanges();
    const list: DebugElement = de.query(By.css('li'));
    expect(list).toBeNull();
  });

  it('should not contain list elements when the remote object has not succeeded', () => {
    (comp as any).objects = {
      hasSucceeded: Observable.of(false),
      payload: Observable.of(['test', 'string'])
    }
    fixture.detectChanges();
    const list: DebugElement = de.query(By.css('ul'));
    expect(list).toBeNull();
  });

});
