import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'revisionProject';
  name = "Rahul";

  onChange(event:any)
  {
     console.log(event);
  }

  onKeyUp(event:any)
  {
     console.log(event.target);
  }

}
