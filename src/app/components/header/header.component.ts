import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  oppositeIcon: 'sunny' | 'moon';
  constructor(private theme: ThemeService) {
    // Theme changer icon
    this.theme.currentTheme.subscribe(
      current => (this.oppositeIcon = current === 'light' ? 'moon' : 'sunny')
    );
  }

  ngOnInit() {}

  toggleDarkIcon() {
    this.theme.currentTheme.next(
      this.oppositeIcon === 'moon' ? 'dark' : 'light'
    );
  }
}
