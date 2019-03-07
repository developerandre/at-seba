import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vision',
  templateUrl: './vision.component.html',
  styleUrls: ['./vision.component.scss']
})
export class VisionComponent implements OnInit {
  params: any;
  prev: string;
  next: string;
  list = ['mission', 'vision', 'values'];
  constructor(activatedRoute: ActivatedRoute) {
    activatedRoute.params.subscribe((params) => {
      this.params = params;
      let i = this.list.indexOf(this.params.id);
      this.prev = this.list[i - 1] || this.list[this.list.length - 1];
      this.next = this.list[i + 1] || this.list[0];
    });
  }

  ngOnInit() {
  }

}
