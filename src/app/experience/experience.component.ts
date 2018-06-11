import {Component, Input, OnInit} from '@angular/core';
import {s} from '@angular/core/src/render3';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  private _experiences: Array<Experience>;

  constructor() { }

  ngOnInit() {
  }

  @Input()
  set experiences(experiences: Array<Experience>) {
    this._experiences = experiences;
  }

  get experiences(): Array<Experience> {
    return this._experiences;
  }
}

export class Experience {
  duration: string;
  title: string;
  company: string;
  description: string;

  constructor(duration: string, title: string, company: string, description: string) {
    this.duration = duration;
    this.title = title;
    this.company = company;
    this.description = description;
  }
}
