import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-namecard',
  templateUrl: './namecard.component.html',
  styleUrls: ['./namecard.component.css']
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
