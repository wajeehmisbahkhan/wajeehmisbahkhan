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
        '../../assets/icon/capacitor.png',
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
        'KAdmin',
        'Complete Uber Clone (Admin Panel)',
        `An ongoing project which is intended to behave like Uber/Careem. The
        admin panel for this application has been created to be cross platform and
        easily accessible from desktop or mobile devices for different admin roles
        such as support manager, marketing manager and super administrator.`,
        [
          this.skills.frontEndDevelopment,
          this.skills.sass,
          this.skills.ts,
          this.skills.angular,
          this.skills.ionic,
          this.skills.backEndDevelopment,
          this.skills.firebase,
          this.skills.hybridDevelopment,
          this.skills.capacitor,
          this.skills.devops,
          this.skills.githubActions
        ],
        '../../assets/img/kadmin.png'
      ),
      new Project(
        'FCP',
        'FAST CarPool',
        `An application that allows students to carpool to get to
        FAST University, Karachi. It helps students find other students who
        share similar routes and enables them to contact each other and
        commute together.`,
        [
          this.skills.frontEndDevelopment,
          this.skills.sass,
          this.skills.ts,
          this.skills.angular,
          this.skills.ionic,
          this.skills.backEndDevelopment,
          this.skills.firebase,
          this.skills.hybridDevelopment,
          this.skills.cordova
        ],
        '../../assets/img/fcp.png',
        null,
        'https://github.com/wajeehmisbahkhan/FASTCarPool/'
      ),
      new Project(
        'UBIT',
        'Universal Bio-Informatics Tool',
        `A Universal Bio-Informatics Tool for solving
        totally everyday problems. It consists of different
        tools such as global/local alignment and calculating
        the levenshtein distance between two DNA strands.`,
        [this.skills.frontEndDevelopment, this.skills.cpp, this.skills.qt],
        '../../assets/img/ubit.png',
        null,
        'https://github.com/wajeehmisbahkhan/UBIT'
      ),
      new Project(
        'PokeFAST',
        'Pokemon in FAST (Uni)',
        `A game centering around a freshman student at FAST University.
        It consists of battles with seniors and teachers. Once the first
        year is cleared, you are promoted to a sophomore where the game ends.`,
        [this.skills.frontEndDevelopment, this.skills.java],
        '../../assets/img/pokefast.png',
        'https://youtu.be/3VDLvWxvL0U',
        'https://github.com/wajeehmisbahkhan/PokeFAST'
      ),
      new Project(
        'FAST NUCES',
        'Timetable Scheduler',
        `An application that generates timetables using a genetic algorithm created specifically for FAST Karachi.`,
        [
          this.skills.frontEndDevelopment,
          this.skills.sass,
          this.skills.ts,
          this.skills.angular,
          this.skills.ionic,
          this.skills.backEndDevelopment,
          this.skills.firebase,
          this.skills.artificialIntelligence,
          this.skills.python,
          this.skills.hybridDevelopment,
          this.skills.capacitor
        ],
        '../../assets/img/fast-nuces.png',
        'https://k173673.000webhostapp.com/fast-nuces/',
        'https://github.com/wajeehmisbahkhan/FAST-NUCES/'
      ),
      new Project(
        'Book Keeping',
        'Financial Tracker',
        `An application that keeps track of your financing.
        It also replicates the firestore method of keeping
        websocket connections in order to get live documents
        or collections.`,
        [
          this.skills.frontEndDevelopment,
          this.skills.sass,
          this.skills.ts,
          this.skills.angular,
          this.skills.ionic,
          this.skills.backEndDevelopment,
          this.skills.node,
          this.skills.mongo,
          this.skills.hybridDevelopment,
          this.skills.cordova,
          this.skills.electron
        ],
        '../../assets/img/bookkeeper.png',
        null,
        'https://github.com/telic-solutions/BookKeeping/'
      ),
      new Project(
        'Dagra Manor',
        'Interior Designing Website',
        `DAGRA MANOR'S moto has been meek and modest in its very own exclusive way of Building, Remodeling and Constructing New Sites.
        This website was created for an interior designer as a way to provide a quick view of their services to customers.`,
        [
          this.skills.frontEndDevelopment,
          this.skills.html,
          this.skills.css,
          this.skills.js
        ],
        '../../assets/img/dagramanor.png'
      ),
      new Project(
        'Knowledge Inn Academy',
        'Educational Website',
        `Knowledge Inn Academy (KIA) is an institution and platform for higher learning dedicated to
        providing innovative undergraduate, postgraduate, and professional education. This website was
        created for a coaching center for a quick introduction to their services.`,
        [
          this.skills.frontEndDevelopment,
          this.skills.html,
          this.skills.css,
          this.skills.js
        ],
        '../../assets/img/kia.png',
        'https://knowledgeinnacademy.com/',
        'https://github.com/wajeehmisbahkhan/KnowledgeInnAcademy'
      ),
      new Project(
        'We Chat',
        'Video Chat Room',
        `A website where two people can join, contact each other and record each other's videos as well.`,
        [
          this.skills.frontEndDevelopment,
          this.skills.bootstrap,
          this.skills.js,
          this.skills.backEndDevelopment,
          this.skills.node,
          this.skills.webrtc,
          this.skills.devops
        ],
        '../../assets/img/wechat.png',
        'https://wajeehmisbahkhan.herokuapp.com/',
        'https://github.com/wajeehmisbahkhan/WebRTC'
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
        ],
        '../../assets/img/mka.png'
      ),
      new Project(
        'Pangea Travels',
        'Travel Agency Website',
        `Pangea Travels is one of the leading Travel & Tour Operators and Destination Management Company in Karachi.
        This website was created for a travel agency to list their offers to interested travellers.`,
        [
          this.skills.frontEndDevelopment,
          this.skills.html,
          this.skills.css,
          this.skills.js
        ],
        '../../assets/img/pangea.png'
      ),
      new Project(
        'Calculus',
        'Equations Visualizer',
        'A website created using p5.js where you can write equations following the format provided and have the equation visualized.',
        [
          this.skills.frontEndDevelopment,
          this.skills.html,
          this.skills.css,
          this.skills.js
        ],
        '../../assets/img/calculus.png',
        'https://k173673.000webhostapp.com/cal/',
        'https://github.com/wajeehmisbahkhan/calculus'
      )
    );
    for (const project of this.projects) {
      // Info urls
      if (!project.pictureUrl) {
        project.pictureUrl = `https://ui-avatars.com/api/?name=${project.title}`;
      }
    }
  }
}
