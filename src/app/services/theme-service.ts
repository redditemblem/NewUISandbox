import { computed, effect, inject, Injectable, signal } from '@angular/core';
import { DOCUMENT } from '@angular/common';

export type ThemeMode = 'light' | 'dark';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {

  private readonly DARK_MODE_CLASS = 'dark-mode';
  private readonly document = inject(DOCUMENT);
  private browserPreference = window.matchMedia('(prefers-color-scheme: dark)');

  private theme = signal<ThemeMode>(
    this.browserPreference.matches ? 'dark' : 'light'
  );
  readonly themeMode = this.theme.asReadonly();
  readonly isDarkMode = computed(() => this.themeMode() === 'dark' );

  constructor(){ 
    effect(() => {
      this.applyDarkModeClass();
    });
  }

  setThemeMode(mode: ThemeMode): void {
    this.theme.set(mode);
  }

  private applyDarkModeClass(): void {
    if(this.themeMode() === 'dark')
      this.document.body.classList.add(this.DARK_MODE_CLASS);
    else
      this.document.body.classList.remove(this.DARK_MODE_CLASS);
  }
}
