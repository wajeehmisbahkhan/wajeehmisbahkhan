import { Component, OnInit } from '@angular/core';
import { Skill } from '../utils/classes';
import { InfoService } from '../services/info.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.page.html',
  styleUrls: ['./projects.page.scss']
})
export class ProjectsPage implements OnInit {
  constructor(private info: InfoService) {}

  ngOnInit() {}

  getSkillColor(skill: Skill) {
    if (skill.title === 'Language') {
      return 'primary';
    } else if (skill.title === 'Framework') {
      return 'secondary';
    } else if (skill.title === 'Tool') {
      return 'tertiary';
    } else if (skill.title === 'Industry') {
      return 'warning';
    }
    return 'danger';
  }

  get projects() {
    return this.info.projects;
  }
}
