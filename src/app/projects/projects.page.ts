import { Component, OnInit } from '@angular/core';
import { Project } from '../utils/classes';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.page.html',
  styleUrls: ['./projects.page.scss']
})
export class ProjectsPage implements OnInit {
  projects: Array<Project> = [];

  constructor() {
    this.initProjects();
  }

  ngOnInit() {}

  initProjects() {
    this.projects.push(
      new Project(
        '',
        'KarCab',
        'A mega project',
        'A project aimed at creating an uber clone.',
        []
      )
    );
  }
}
