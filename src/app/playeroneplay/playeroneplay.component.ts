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
  playerOneScoreInfo: string = 'No strike have been made yet.';

  @Input() playerOneStrikeGridController: string;

  constructor() { }

  playerOneStrike (firstPlayerStrike: string) {
    if (this.firstPlayerHit.length === 17) {
      this.playerOneScoreInfo = 'You have sunk all the ships of your opponent and won the game';
      localStorage.setItem('playerOneStrike', 'success');
    } else {
      if (localStorage.getItem('playerTwoStrike') === 'failure') {
        if (JSON.parse(this.secondPlayerCarrierPosition).includes(firstPlayerStrike) && !this.firstPlayerHit.includes(firstPlayerStrike)) {
          this.firstPlayerHit.push(firstPlayerStrike);
          localStorage.setItem('playerOneStrike', 'success');
          this.playerOneScoreInfo = 'You have a hit on your oponents Carrier.';
        } else if (JSON.parse(this.secondPlayerFrigatePosition).includes(firstPlayerStrike) && !this.firstPlayerHit.includes(firstPlayerStrike)) {
          this.firstPlayerHit.push(firstPlayerStrike);
          localStorage.setItem('playerOneStrike', 'success');
          this.playerOneScoreInfo = 'You have a hit on your oponents Frigate.';
        } else if (JSON.parse(this.secondPlayerCruiserPosition).includes(firstPlayerStrike) && !this.firstPlayerHit.includes(firstPlayerStrike)) {
          this.firstPlayerHit.push(firstPlayerStrike);
          localStorage.setItem('playerOneStrike', 'success');
          this.playerOneScoreInfo = 'You have a hit on your oponents Cruiser.';
        } else if (JSON.parse(this.secondPlayerSubmarinePosition).includes(firstPlayerStrike) && !this.firstPlayerHit.includes(firstPlayerStrike)) {
          this.firstPlayerHit.push(firstPlayerStrike);
          localStorage.setItem('playerOneStrike', 'success');
          this.playerOneScoreInfo = 'You have a hit on your oponents Submarine.';
        } else if (JSON.parse(this.secondPlayerDestroyerPosition).includes(firstPlayerStrike) && !this.firstPlayerHit.includes(firstPlayerStrike)) {
          this.firstPlayerHit.push(firstPlayerStrike);
          localStorage.setItem('playerOneStrike', 'success');
          this.playerOneScoreInfo = 'You have a hit on your oponents Destroyer.';
        } else {
          if (!this.firstPlayerHit.includes(firstPlayerStrike) && !this.firstPlayerMiss.includes(firstPlayerStrike)) {
            this.firstPlayerMiss.push(firstPlayerStrike);
            localStorage.setItem('playerOneStrike', 'failure');
            localStorage.setItem('playerTwoStrike', 'success');
            this.playerOneScoreInfo = 'You could not hit any of your oponents ship.';
          }
        }
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
