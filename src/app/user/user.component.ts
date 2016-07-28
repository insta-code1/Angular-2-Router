import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-user',
  template: `
    <p>
      user Works!
    </p>
  `,
  styles: []
})
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
