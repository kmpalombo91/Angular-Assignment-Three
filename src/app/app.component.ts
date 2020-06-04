import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  styles: [`
  .times {
    color: white;
  }`]
})
export class AppComponent {
  title = 'assignment-three';
  times = 0;
  clicked = false;
  clicks = [];

  onClicked() {
    if (this.times % 2 == 0) {
      this.clicked = true;
    } else {
      this.clicked = false;
    }
    this.times++;
    this.clicks.push(this.times);
  }
}
