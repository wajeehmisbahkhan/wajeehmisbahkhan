export class Skill {
  technology: string;
  text: string;
  url: string;

  constructor(technology: string, text: string, url: string) {
    this.technology = technology;
    this.text = text;
    this.url = url;
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
