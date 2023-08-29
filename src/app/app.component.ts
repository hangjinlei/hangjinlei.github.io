import { Component } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hangjinlei';

  open: boolean = false;
  isBusy: boolean = true;
  drawer!: MatDrawer;

  constructor() {
    // wait 5 seconds, then set isBusy to false
    setTimeout(() => {
      this.isBusy = false;
      this.drawer.toggle();
    }, 5000);
  }

  toggle() {
    this.open = !this.open;
    console.log(this.open);
  }
}
