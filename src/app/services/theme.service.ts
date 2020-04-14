import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  currentTheme: BehaviorSubject<'light' | 'dark'>;

  constructor() {
    // Default value
    this.currentTheme = new BehaviorSubject('light');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    // Default preferred value
    this.currentTheme.next(prefersDark.matches ? 'dark' : 'light');
    // System preference listener
    prefersDark.addEventListener('change', mediaQuery => {
      this.currentTheme.next(mediaQuery.matches ? 'dark' : 'light');
    });
    // Theme changer
    this.currentTheme.subscribe(this.toggleDarkTheme);
  }

  toggleDarkTheme(theme: 'dark' | 'light') {
    const shouldAdd = theme === 'dark' ? true : false;
    document.body.classList.toggle('dark', shouldAdd);
  }
}
