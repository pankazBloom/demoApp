import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  @Output() siblingValue: any = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  test() {
    this.siblingValue.emit('data');//emits the data to the parent

  }


}
