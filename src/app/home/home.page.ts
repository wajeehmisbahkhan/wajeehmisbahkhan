import { Component } from '@angular/core';
import { InfoService } from '../services/info.service';
import { Skill } from '../utils/classes';
import { SkillTitle } from '../utils/types';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  skillTitles: Array<SkillTitle>;
  skills: Array<Skill>;
  constructor(private info: InfoService) {
    this.skills = Object.values(this.info.skills);
    // Arrangement
    this.skillTitles = ['Industry', 'Language', 'Framework', 'Tool'];
  }
}
