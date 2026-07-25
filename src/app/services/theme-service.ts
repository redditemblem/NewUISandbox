import { computed, effect, inject, Injectable, signal } from '@angular/core';
import { DOCUMENT } from '@angular/common';

export type ThemeMode = 'light' | 'dark';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {

  private readonly DARK_MODE_CLASS = 'dark-mode';
  private readonly document = inject(DOCUMENT);

  private readonly browserPreference = window.matchMedia('(prefers-color-scheme: dark)');
  private themeMode = signal<ThemeMode>(
    //Set the default theme mode based on the user's browser preference
    this.browserPreference.matches ? 'dark' : 'light'
  );
  public inDarkMode = computed(() => this.themeMode() === 'dark' );

  constructor(){ 
    effect(() => {
      this.applyDarkModeClass();
    });
  }

  public toggleTheme() {
    this.themeMode.set(this.inDarkMode() ? 'light' : 'dark');
  }

  private applyDarkModeClass(): void {
    if(this.inDarkMode()) this.document.body.classList.add(this.DARK_MODE_CLASS);
    else this.document.body.classList.remove(this.DARK_MODE_CLASS);
  }
}
