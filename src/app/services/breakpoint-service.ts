import { BreakpointObserver } from '@angular/cdk/layout';
import { inject, Injectable, signal } from '@angular/core';

const bPoint900px = '(max-width: 900px)';

@Injectable({
  providedIn: 'root',
})
export class BreakpointService {

  private breakpointObserver = inject(BreakpointObserver);

  private isSmallWidth = signal<boolean>(false);
  readonly isScreenSmallWidth = this.isSmallWidth.asReadonly();

  constructor()  {
    this.breakpointObserver
    // pass values from constants.ts
    .observe([bPoint900px])
    .subscribe(x => {
      // Set signal to the breakpoint check result
      this.isSmallWidth.set(x.breakpoints[bPoint900px]);
    });
  }
}
