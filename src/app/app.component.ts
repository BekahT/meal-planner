import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'recipe-book';
  currentPage: string = 'recipes';

  onChange(newPage: string) {
    this.currentPage = newPage;
  }
}
