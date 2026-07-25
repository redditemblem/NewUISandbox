import { BreakpointObserver } from '@angular/cdk/layout';
import { inject, Injectable, Signal, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BreakpointService {

  private isSmallWidth = signal<boolean>(false);
  public readonly isScreenSmallWidth: Signal<boolean> = this.isSmallWidth.asReadonly();

  private readonly bPoint900px: string = '(max-width: 900px)';

  constructor(private breakpointObserver: BreakpointObserver)  {
    this.breakpointObserver = inject(BreakpointObserver);

    this.breakpointObserver
    .observe([this.bPoint900px])
    .subscribe(x => {
      // Set signal to the breakpoint check result
      this.isSmallWidth.set(x.breakpoints[this.bPoint900px]);
    });
  }
}
