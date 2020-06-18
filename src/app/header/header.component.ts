import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() pageChanged = new EventEmitter<string>();
  currentPage: string = 'recipes';

  constructor() { }

  ngOnInit(): void {
  }

  onPageChanged(newPage: string) {
    this.currentPage = newPage;
    this.pageChanged.emit(this.currentPage);
  }

}
