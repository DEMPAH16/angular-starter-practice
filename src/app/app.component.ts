
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'My First Angular App';
  character = null;
  planets = [];
  インプット = '無';
  counter = 0;

  constructor() {}

  ngOnInit() {
  }

  onClickHandler(event) {
    this.counter++;
    console.log(event, this.counter);
  }
}

// <MyComponent prop="foo" />
// React.createElement(MyComponent, { prop: 'foo' });
