import { Injectable } from '@angular/core';
import { Skill, Project } from '../utils/classes';

@Injectable({
  providedIn: 'root'
})
export class InfoService {
  skills: Array<Skill>;
  projects: Array<Project>;
  constructor() {
    this.skills = [];
    this.projects = [];
    this.initSkills();
    this.initProjects();
  }

  initSkills() {
    this.skills.push(
      new Skill('Industry', 'Web Development'),
      new Skill('Industry', 'Hybrid App Development'),
      new Skill('Industry', 'Native IOS Development'),
      new Skill('Industry', 'Front End Development'),
      new Skill('Industry', 'Back End Development'),
      new Skill('Industry', 'Cloud Computing'),
      new Skill('Industry', 'Artificial Intelligence'),
      new Skill('Industry', 'Machine Learning'),
      new Skill(
        'Tool',
        'Git',
        '../../assets/icon/git.png',
        'https://git-scm.com/'
      ),
      new Skill(
        'Tool',
        'Github',
        '../../assets/icon/github.png',
        'https://github.com/'
      ),
      new Skill(
        'Tool',
        'Firebase',
        '../../assets/icon/firebase.png',
        'https://firebase.google.com/'
      ),
      new Skill(
        'Tool',
        'WebRTC',
        '../../assets/icon/webrtc.png',
        'https://webrtc.org/'
      ),
      new Skill('Language', 'HTML 5', '../../assets/icon/html5.png'),
      new Skill('Language', 'CSS 3', '../../assets/icon/css3.png'),
      new Skill(
        'Language',
        'SASS',
        '../../assets/icon/sass.png',
        'https://sass-lang.com/'
      ),
      new Skill('Language', 'JavaScript', '../../assets/icon/js.png'),
      new Skill('Language', 'TypeScript', '../../assets/icon/ts.png'),
      new Skill(
        'Language',
        'Swift',
        '../../assets/icon/swift.png',
        'https://developer.apple.com/swift/'
      ),
      new Skill('Language', 'C++', '../../assets/icon/c++.png'),
      new Skill(
        'Language',
        'Java',
        '../../assets/icon/java.png',
        'https://www.java.com/'
      ),
      new Skill(
        'Language',
        'Python',
        '../../assets/icon/python.png',
        'https://www.python.org/'
      ),
      new Skill(
        'Framework',
        'Angular',
        '../../assets/icon/angular.png',
        'https://angular.io/'
      ),
      new Skill(
        'Framework',
        'Ionic',
        '../../assets/icon/ionic.png',
        'https://ionicframework.com/'
      ),
      new Skill(
        'Framework',
        'Cordova',
        '../../assets/icon/cordova.png',
        'https://cordova.apache.org/'
      ),
      new Skill(
        'Framework',
        'Electron',
        '../../assets/icon/electron.png',
        'https://www.electronjs.org/'
      ),
      new Skill(
        'Framework',
        'Capacitor',
        '../../assets/icon/capcitor.png',
        'https://capacitor.ionicframework.com/'
      ),
      new Skill(
        'Framework',
        'Swift UI',
        '../../assets/icon/swiftui.png',
        'https://developer.apple.com/xcode/swiftui/'
      ),
      new Skill(
        'Framework',
        'QT',
        '../../assets/icon/qt.png',
        'https://www.qt.io/'
      )
    );
    for (const skill of this.skills) {
      // Info urls
      if (!skill.infoUrl) {
        skill.infoUrl = `https://www.google.com/search?q=${skill.text}`;
      }
      if (!skill.pictureUrl) {
        skill.pictureUrl = `https://ui-avatars.com/api/?name=${skill.text}`;
      }
    }
  }

  initProjects() {
    this.projects.push(
      new Project(
        'Dagra Manor',
        'A CV Website',
        'This website was created for...',
        []
      )
    );
  }
}
