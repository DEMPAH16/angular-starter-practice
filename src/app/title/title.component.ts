import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'my-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {
  @Input()
  text = 'This really works!';
  @Output()
  emitClick = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onClickedTitle() {
    this.emitClick.emit('hullo from title!');
  }

}
