import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  playerOneGridController: number = 0;
  playerTwoGridController: number = 0;
  dashBoardViewController: string = 'playerOneGrid';

  constructor() { }

  incrementfirstPlayerGridController () {
    this.playerOneGridController++;
    if (this.playerOneGridController === 17) {
      this.dashBoardViewController = 'playerTwoGrid';
    }
  }

  incrementSecondPlayerGridController () {
    this.playerTwoGridController++;
  }

  ngOnInit() {
  }

}
