import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.page.html',
  styleUrls: ['./projects.page.scss']
})
export class ProjectsPage implements OnInit {
  numbers: Array<number> = [];

  constructor() {
    for (let i = 0; i < 20; i++) {
      this.numbers.push(i);
    }
  }

  ngOnInit() {}
}
