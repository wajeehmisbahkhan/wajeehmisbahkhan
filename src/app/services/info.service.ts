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
      node: new Skill(
        'Language',
        'Node',
        '../../assets/icon/node.png',
        'https://nodejs.org/'
      ),
      mongo: new Skill(
        'Language',
        'Mongo DB',
        '../../assets/icon/mongo.png',
        'https://www.mongodb.com/'
      ),
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
      bootstrap: new Skill(
        'Framework',
        'Bootstrap',
        '../../assets/icon/bootstrap.png',
        'https://getbootstrap.com/'
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
      express: new Skill(
        'Framework',
        'Express',
        '../../assets/icon/express.png',
        'https://expressjs.com/'
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
        'Interior Designing Website',
        `DAGRA MANOR'S moto has been meek and modest in its very own exclusive way of Building, Remodeling and Constructing New Sites. This website was created for an interior designer as a way to provide a quick view of their services to customers.`,
        [
          this.skills.frontEndDevelopment,
          this.skills.html,
          this.skills.css,
          this.skills.js
        ]
      ),
      new Project(
        'Knowledge Inn Academy',
        'Educational Website',
        `Knowledge Inn Academy (KIA) is an institution and platform for higher learning dedicated to providing innovative undergraduate, postgraduate, and professional education. This website was created for a coaching center for a quick introduction to their services.`,
        [
          this.skills.frontEndDevelopment,
          this.skills.html,
          this.skills.css,
          this.skills.js
        ]
      ),
      new Project(
        'Misbah Khan & Associates',
        'Construction Website',
        'This website was created for a construction company for their introduction to interested customers.',
        [
          this.skills.frontEndDevelopment,
          this.skills.html,
          this.skills.css,
          this.skills.js
        ]
      ),
      new Project(
        'Pangea Travels',
        'Travel Agency Website',
        `Pangea Travels is one of the leading Travel & Tour Operators and Destination Management Company in Karachi. This website was created for a travel agency to list their offers to interested travellers.`,
        [
          this.skills.frontEndDevelopment,
          this.skills.html,
          this.skills.css,
          this.skills.js
        ]
      ),
      new Project(
        'UBIT',
        'Universal Bio-Informatics Tool',
        'A Universal Bio-Informatics Tool for solving totally everyday problems.',
        [this.skills.frontEndDevelopment, this.skills.cpp, this.skills.qt]
      ),
      new Project(
        'PokeFAST',
        'Pokemon in FAST (Uni)',
        'A game centering around a freshman student at FAST University.',
        [this.skills.frontEndDevelopment, this.skills.java]
      ),
      new Project(
        'Calculus',
        'Equations Visualizer',
        'A website where you can write equations following the format provided and have the equation visualized.',
        [
          this.skills.frontEndDevelopment,
          this.skills.html,
          this.skills.css,
          this.skills.js
        ]
      ),
      new Project(
        'KarCab',
        'Complete Uber Clone',
        'A mega project which was created...',
        [
          this.skills.frontEndDevelopment,
          this.skills.backEndDevelopment,
          this.skills.angular,
          this.skills.ionic,
          this.skills.firebase,
          this.skills.devops,
          this.skills.githubActions
        ]
      ),
      new Project(
        'We Chat',
        'Video Chat Room',
        `A website where two people can join, contact each other and record each other's videos as well.`,
        [
          this.skills.frontEndDevelopment,
          this.skills.bootstrap,
          this.skills.backEndDevelopment,
          this.skills.node,
          this.skills.webrtc,
          this.skills.devops
        ]
      )
    );
    for (const project of this.projects) {
      // Info urls
      if (!project.viewUrl) {
        project.viewUrl = `https://www.google.com/search?q=${project.title}`;
      }
      if (!project.pictureUrl) {
        project.pictureUrl = `https://ui-avatars.com/api/?name=${project.title}`;
      }
    }
  }
}
