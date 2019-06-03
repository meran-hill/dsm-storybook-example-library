import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'nav-component',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  activeTab;

  @Input()
  tabs: Array<object>;

  @Input()
  initialActiveTab: string;

  ngOnInit() {
    this.activeTab = this.initialActiveTab;
  }

  setActiveTab = (tab) => {
    this.activeTab = tab.id;
  };

  trackById = (index, tab) => {
    return tab.id;
  };
}