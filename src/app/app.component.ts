import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sample-project';
  user = 'pankaj'
  checkBox: boolean = false;

  showAlert() {
    alert(this.user)
  }
}
