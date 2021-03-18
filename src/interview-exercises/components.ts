import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { of } from 'rxjs';
import { concatMap, switchMap, delay, tap } from 'rxjs/operators';

@Component({
  selector: 'component-a',
  template: '{{data.url}}',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComponentA {
  @Input() public data;
}

@Component({
  selector: 'component-b',
  template: '<component-a [data]="data"></component-a>',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComponentB {
  public readonly data = { url: 'test 1' };

  // Can I do this given readonly?
  // What do you expect to see considering the ChangeDetectionStrategy.OnPush
  public someMethod() {
    this.data.url = 'test 2';
  }

  // Can I do this?
  // Any side effects?
  public someOtherMethod() {
    const data = this.data;
    data.url = 'test 2';
    data.href = 'test 3';
  }

  // What can you expect from this?
  public concatMap() {
    of(1, 2, 3)
      .pipe(
        concatMap((val) =>
          of(`Value: ${val}`).pipe(
            delay(Math.random() * 1000),
            tap((result) => console.log(result))
          )
        )
      )
      .subscribe();
  }

  // What can you expect from this?
  public switchMap() {
    of(1, 2, 3)
      .pipe(
        switchMap((val) =>
          of(`Value: ${val}`).pipe(
            delay(Math.random() * 1000),
            tap((result) => console.log(result))
          )
        )
      )
      .subscribe();
  }
}
