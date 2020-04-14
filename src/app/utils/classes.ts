export class Skill {
  title: string;
  text: string;
  pictureUrl: string;
  infoUrl: string;

  constructor(
    title: string,
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
  pictureUrl: string;
  title: string;
  subtitle: string;
  description: string;
  skillsUsed: Array<Skill>;
  viewUrl?: string;
  githubUrl?: string;

  constructor(
    pictureUrl: string,
    title: string,
    subtitle: string,
    description: string,
    skillsUsed: Array<Skill>,
    viewUrl?: string,
    githubUrl?: string
  ) {
    this.pictureUrl = pictureUrl;
    this.title = title;
    this.subtitle = subtitle;
    this.description = description;
    this.skillsUsed = skillsUsed;
    this.viewUrl = viewUrl;
    this.githubUrl = githubUrl;
  }
}
