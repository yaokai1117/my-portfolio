import { Component } from '@angular/core';
import {Experience} from './experience/experience.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  experiences: Array<Experience> = [
    {duration: '2018.5 - 2018.8', title: 'Software Engineering Intern', company: 'Google', description: 'Worked on the frontend of AdWords Next. Implement' +
      'ed review panels for the ads construction page.'},
    {duration: '2016.6 - 2017.5', title: 'Research Intern', company: 'Microsoft Research Asia ', description: 'Worked on the improvement ' +
      'of the LUIS service (part of the Microsoft Cognitive Services, provides APIs for chatting bots). Built the datetime extractor, out' +
      'performed the original one in most test cases.'}
  ];

  education: Array<Experience> = [
    {duration: '2017.8 - Present', title: 'Master\'s Degree in Software Engineering', company: 'Carnegie Mellon University',
      description: 'Selected Coursework: Foundation of Software Engineering, Software Architecture & Design, Distributed System, Advance Machine Learning'},
    {duration: '2013.9 - 2017.7', title: 'Bachelor\'s Degree in Computer Science', company: 'University of Science & Technology of China',
      description: 'Selected Coursework: Operating System, Computer Networks, Foundation of Algorithm, Principles and Techniques of Compiler'}
  ];
}
