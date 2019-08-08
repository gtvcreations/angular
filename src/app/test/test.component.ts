import { Component, Input, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public title = "test Component";
  public url = window.location.href;
  public isDisabled = true;
  public successClass = "green";
  public isSpecial = true;
  public classGroup = {
    "red": this.isDisabled,
    "green": !this.isDisabled,
    "blue": this.isSpecial
  };
  public red = '#f00';
  public highlightText = {
    "color": "#000",
    "background": "#ff0"
  };
  

  // @Input() public parentData;
  @Input('parentData') public message;
  @Output() public childEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  greetUser() {
    return "Hello "+this.title;
  }

  onClick() {
    this.title = "test component click event";
  }

  changeTitle(value) {
    this.title = value;
  }

  emitEvent() {
    this.childEvent.emit("I am from Test Component[Child]");
  }

}
