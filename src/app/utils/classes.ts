import { SkillTitle } from './types';

export class Skill {
  title: SkillTitle;
  text: string;
  pictureUrl: string;
  infoUrl: string;

  constructor(
    title: SkillTitle,
    text: string,
    pictureUrl?: string,
    infoUrl?: string
  ) {
    this.title = title;
    this.text = text;
    this.pictureUrl = pictureUrl;
    this.infoUrl = infoUrl;
  }
}

export class Project {
  title: string;
  subtitle: string;
  description: string;
  skillsUsed: Array<Skill>;
  pictureUrl?: string;
  viewUrl?: string;
  githubUrl?: string;

  constructor(
    title: string,
    subtitle: string,
    description: string,
    skillsUsed: Array<Skill>,
    pictureUrl?: string,
    viewUrl?: string,
    githubUrl?: string
  ) {
    this.title = title;
    this.subtitle = subtitle;
    this.description = description;
    this.skillsUsed = skillsUsed;
    this.pictureUrl = pictureUrl;
    this.viewUrl = viewUrl;
    this.githubUrl = githubUrl;
  }
}
