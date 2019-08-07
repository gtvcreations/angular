import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'root app component';
  public message = 'I am App Root Component';
  public childMsg = 'Click "Send to Parent" button to recieve data from child component';
}
