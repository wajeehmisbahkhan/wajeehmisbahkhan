import { Injectable } from '@angular/core';
import { Skill, Project } from '../utils/classes';
import { Skills } from '../utils/interfaces';

@Injectable({
  providedIn: 'root'
})
export class InfoService {
  skills: Skills;
  projects: Array<Project>;
  constructor() {
    this.projects = [];
    this.initSkills();
    this.initProjects();
  }

  initSkills() {
    this.skills = {
      webDevelopment: new Skill('Industry', 'Web Development'),
      hybridDevelopment: new Skill('Industry', 'Hybrid App Development'),
      nativeIosDevelopment: new Skill('Industry', 'Native IOS Development'),
      frontEndDevelopment: new Skill('Industry', 'Front End Development'),
      backEndDevelopment: new Skill('Industry', 'Back End Development'),
      cloudComputing: new Skill('Industry', 'Cloud Computing'),
      artificialIntelligence: new Skill('Industry', 'Artificial Intelligence'),
      machineLearning: new Skill('Industry', 'Machine Learning'),
      devops: new Skill('Industry', 'DevOps'),
      git: new Skill(
        'Tool',
        'Git',
        '../../assets/icon/git.png',
        'https://git-scm.com/'
      ),
      github: new Skill(
        'Tool',
        'Github',
        '../../assets/icon/github.png',
        'https://github.com/'
      ),
      githubActions: new Skill(
        'Tool',
        'Github Actions',
        '../../assets/icon/github_actions.png',
        'https://github.com/features/actions'
      ),
      firebase: new Skill(
        'Tool',
        'Firebase',
        '../../assets/icon/firebase.png',
        'https://firebase.google.com/'
      ),
      webrtc: new Skill(
        'Tool',
        'WebRTC',
        '../../assets/icon/webrtc.png',
        'https://webrtc.org/'
      ),
      html: new Skill('Language', 'HTML 5', '../../assets/icon/html5.png'),
      css: new Skill('Language', 'CSS 3', '../../assets/icon/css3.png'),
      sass: new Skill(
        'Language',
        'SASS',
        '../../assets/icon/sass.png',
        'https://sass-lang.com/'
      ),
      js: new Skill('Language', 'JavaScript', '../../assets/icon/js.png'),
      ts: new Skill('Language', 'TypeScript', '../../assets/icon/ts.png'),
      swift: new Skill(
        'Language',
        'Swift',
        '../../assets/icon/swift.png',
        'https://developer.apple.com/swift/'
      ),
      cpp: new Skill('Language', 'C++', '../../assets/icon/c++.png'),
      java: new Skill(
        'Language',
        'Java',
        '../../assets/icon/java.png',
        'https://www.java.com/'
      ),
      python: new Skill(
        'Language',
        'Python',
        '../../assets/icon/python.png',
        'https://www.python.org/'
      ),
      angular: new Skill(
        'Framework',
        'Angular',
        '../../assets/icon/angular.png',
        'https://angular.io/'
      ),
      ionic: new Skill(
        'Framework',
        'Ionic',
        '../../assets/icon/ionic.png',
        'https://ionicframework.com/'
      ),
      cordova: new Skill(
        'Framework',
        'Cordova',
        '../../assets/icon/cordova.png',
        'https://cordova.apache.org/'
      ),
      electron: new Skill(
        'Framework',
        'Electron',
        '../../assets/icon/electron.png',
        'https://www.electronjs.org/'
      ),
      capacitor: new Skill(
        'Framework',
        'Capacitor',
        '../../assets/icon/capcitor.png',
        'https://capacitor.ionicframework.com/'
      ),
      swiftui: new Skill(
        'Framework',
        'Swift UI',
        '../../assets/icon/swiftui.png',
        'https://developer.apple.com/xcode/swiftui/'
      ),
      qt: new Skill(
        'Framework',
        'QT',
        '../../assets/icon/qt.png',
        'https://www.qt.io/'
      )
    };
    for (const skill of Object.keys(this.skills)) {
      // Info urls
      if (!this.skills[skill].infoUrl) {
        this.skills[
          skill
        ].infoUrl = `https://www.google.com/search?q=${this.skills[skill].text}`;
      }
      if (!this.skills[skill].pictureUrl) {
        this.skills[
          skill
        ].pictureUrl = `https://ui-avatars.com/api/?name=${this.skills[skill].text}`;
      }
    }
  }

  initProjects() {
    this.projects.push(
      new Project(
        'Dagra Manor',
        'A CV Website',
        'This website was created for...',
        [
          this.skills.frontEndDevelopment,
          this.skills.html,
          this.skills.css,
          this.skills.js
        ]
      )
    );
  }
}
