import { Component, OnInit } from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-namecard',
  templateUrl: './namecard.component.html',
  styleUrls: ['./namecard.component.css'],
  animations: [
    trigger('slideInFromLeft', [
      transition(':enter', [
        style({transform: 'translateX(-5%)', opacity: 0}),
        animate('900ms ease-in', style({transform: 'translateX(0%)', opacity: 1}))
      ])
    ]),
    trigger('slideInFromRight', [
      transition(':enter', [
        style({transform: 'translateX(5%)', opacity: 0}),
        animate('900ms ease-in', style({transform: 'translateX(0%)', opacity: 1}))
      ])
    ]),
    trigger('slideInFromBottom', [
      transition(':enter', [
        style({transform: 'translateY(20%)', opacity: 0}),
        animate('900ms ease-in', style({transform: 'translateX(0%)', opacity: 1}))
      ])
    ])
  ]
})
export class NamecardComponent implements OnInit {

  name = 'Kai Yao';
  description1 = 'Software Engineering Intern @ Google';
  description2 = 'M.S. Student in Software Engineering @ CMU';
  description3 = 'Interested in Full-stack Web Development, AI';
  phone = '650-210-6169';
  email = 'yaokai1117@gmail.com';

  constructor() { }

  ngOnInit() {
  }

}
