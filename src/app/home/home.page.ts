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
  skillMaterial: Array<{
    title: SkillTitle;
    content: string;
  }>;
  skills: Array<Skill>;
  constructor(private info: InfoService) {
    this.skills = Object.values(this.info.skills);
    // Arrangement
    this.skillMaterial = [
      {
        title: 'Language',
        content: `
          I am a polyglot but mostly use languages from the C-Family.
        `
      },
      {
        title: 'Framework',
        content: `
          In terms of the specific languages, frameworks and tools that I use in these fields, I have extensive experience in
          JavaScript and Angular for front end development. I use Ionic for cross platform development and have gained experience
          in developing Flutter applications as well for iOS and Android. I have created a backend in Node, Express and MongoDB
          and a live database model similar to Firestore using Websockets.
        `
      },
      {
        title: 'Tool',
        content: `
          Many of the applications that I have worked on depend on Firebase services such as Authentication, Real Time Database,
          Firestore, Storage and many more. I have used SwiftUI for native iOS development and use Github Actions and Fastlane for
          Continuous Delivery of applications. For end to end testing of web applications, I use Cypress along with the Firebase
          Emulators suite.
        `
      },
      {
        title: 'Industry',
        content: `
          In terms of industries, I am mostly self taught in frontend development. This includes web, hybrid and cross platform
          app development. I have extensive experience in backend development as well. I also learned native iOS development
          recently and have focused mostly on learning DevOps to automate CI/CD flows. Other than these skills, I have taken
          courses on AI, Machine Learning and BlockChain/Cryptocurrency in college and have learned a lot about these fields.
        `
      }
    ];
  }

  getSkillsByTitle(title: SkillTitle) {
    return this.skills.filter(skill => skill.title === title);
  }
}
