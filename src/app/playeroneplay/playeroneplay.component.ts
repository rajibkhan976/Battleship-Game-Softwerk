import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-playeroneplay',
  templateUrl: './playeroneplay.component.html',
  styleUrls: ['./playeroneplay.component.css']
})
export class PlayeroneplayComponent implements OnInit {

  secondPlayerCarrierPosition: any = localStorage.getItem('playerTwoCarrierPosition');
  secondPlayerFrigatePosition: any = localStorage.getItem('playerTwoFrigatePosition');
  secondPlayerCruiserPosition: any = localStorage.getItem('playerTwoCruiserPosition');
  secondPlayerSubmarinePosition: any = localStorage.getItem('playerTwoSubmarinePosition');
  secondPlayerDestroyerPosition: any = localStorage.getItem('playerTwoDestroyerPosition');

  firstPlayerHit: string[] = [];
  firstPlayerMiss: string[] = [];

  playerOne: string = 'Player one strike grid';

  @Input() playerOneStrikeGridController: string;

  constructor() { }

  playerOneStrike (firstPlayerStrike: string) {
    if (localStorage.getItem('playerTwoStrike') === 'failure') {
      if (JSON.parse(this.secondPlayerCarrierPosition).includes(firstPlayerStrike)) {
        this.firstPlayerHit.push(firstPlayerStrike);
        localStorage.setItem('playerOneStrike', 'success');
      } else if (JSON.parse(this.secondPlayerFrigatePosition).includes(firstPlayerStrike)) {
        this.firstPlayerHit.push(firstPlayerStrike);
        localStorage.setItem('playerOneStrike', 'success');
      } else if (JSON.parse(this.secondPlayerCruiserPosition).includes(firstPlayerStrike)) {
        this.firstPlayerHit.push(firstPlayerStrike);
        localStorage.setItem('playerOneStrike', 'success');
      } else if (JSON.parse(this.secondPlayerSubmarinePosition).includes(firstPlayerStrike)) {
        this.firstPlayerHit.push(firstPlayerStrike);
        localStorage.setItem('playerOneStrike', 'success');
      } else if (JSON.parse(this.secondPlayerDestroyerPosition).includes(firstPlayerStrike)) {
        this.firstPlayerHit.push(firstPlayerStrike);
        localStorage.setItem('playerOneStrike', 'success');
      } else {
        this.firstPlayerMiss.push(firstPlayerStrike);
        localStorage.setItem('playerOneStrike', 'failure');
        localStorage.setItem('playerTwoStrike', 'success');
      }
    }
    console.log(this.firstPlayerHit);
    console.log(localStorage.getItem('playerTwoStrike'));
  }

  playerOneStrikeSignal (playerOneGridStrikeValue: string) {
    if (this.firstPlayerHit.includes(playerOneGridStrikeValue)) {
      return 'hit';
    } else if (this.firstPlayerMiss.includes(playerOneGridStrikeValue)) {
      return 'miss';
    } else {
      return 'noClass';
    }
  }

  ngOnInit() {
  }

}
