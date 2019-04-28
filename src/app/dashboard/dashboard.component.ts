import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  playerOneGridController: number = 0;
  playerTwoGridController: number = 0;
  dashBoardViewControllerOne: string = 'playerOneGrid';
  dashBoardViewControllerTwo: string = '';
  playerOneViewController: string = 'playerOnePositionGrid';
  playerTwoViewController: string = 'playerTwoPositionGrid';

  constructor() { }

  incrementfirstPlayerGridController () {
    this.playerOneGridController++;
    if (this.playerOneGridController === 17) {
      this.dashBoardViewControllerOne = '';
      this.dashBoardViewControllerTwo = 'playerTwoGrid';
      this.playerOneViewController = 'playerTwoStrikeGrid';
    }
  }

  incrementSecondPlayerGridController () {
    this.playerTwoGridController++;
    if (this.playerTwoGridController === 17) {
      this.dashBoardViewControllerOne = 'playerOneGrid';
      this.playerTwoViewController = 'playerOneStrikeGrid';
    }
  }

  ngOnInit() {
  }

}
