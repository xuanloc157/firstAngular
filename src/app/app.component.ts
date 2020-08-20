import { Component } from '@angular/core';

@Component({
  selector    : 'app-root',
  templateUrl : './app.component.html',
  styleUrls   : ['./app.component.css']
})
export class AppComponent {
  title       = 'firstAngular';
  user = {
    name      : 'loc',
    age       : 21
  };
  name        = 'loc';
  checked     = true;
}
