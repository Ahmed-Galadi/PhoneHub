import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  hideSearch: boolean = true;

  searchInput: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  clearInput() {
    this.searchInput = '';
    this.hideSearch = true;
  }

  onSearch() {}

  switchDeleteIcon() {
    this.hideSearch = false;
  }
}
