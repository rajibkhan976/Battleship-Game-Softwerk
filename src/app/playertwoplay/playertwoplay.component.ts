import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-playertwoplay',
  templateUrl: './playertwoplay.component.html',
  styleUrls: ['./playertwoplay.component.css']
})
export class PlayertwoplayComponent {

  firstPlayerCarrierPosition: any = localStorage.getItem('playerOneCarrierPosition');
  firstPlayerFrigatePosition: any = localStorage.getItem('playerOneFrigatePosition');
  firstPlayerCruiserPosition: any = localStorage.getItem('playerOneCruiserPosition');
  firstPlayerSubmarinePosition: any = localStorage.getItem('playerOneSubmarinePosition');
  firstPlayerDestroyerPosition: any = localStorage.getItem('playerOneDestroyerPosition');

  secondPlayerHit: string[] = [];
  secondPlayerMiss: string[] = [];

  playerTwo: string = 'Player two strike grid';
  playerTwoScoreInfo: string = 'No strike have been made yet.';

  @Input() playerTwoStrikeGridController: string;

  constructor() { }

  playerTwoStrike (secondPlayerStrike: string) {
    if (this.secondPlayerHit.length === 17) {
      this.playerTwoScoreInfo = 'You have sunk all the ships of your opponent and won the game';
    } else {
      if (localStorage.getItem('playerOneStrike') === 'failure') {
        if (JSON.parse(this.firstPlayerCarrierPosition).includes(secondPlayerStrike) && !this.secondPlayerHit.includes(secondPlayerStrike)) {
          this.secondPlayerHit.push(secondPlayerStrike);
          localStorage.setItem('playerTwoStrike', 'success');
          this.playerTwoScoreInfo = 'You have a hit on your oponents Carrier.';
        } else if (JSON.parse(this.firstPlayerFrigatePosition).includes(secondPlayerStrike) && !this.secondPlayerHit.includes(secondPlayerStrike)) {
          this.secondPlayerHit.push(secondPlayerStrike);
          localStorage.setItem('playerTwoStrike', 'success');
          this.playerTwoScoreInfo = 'You have a hit on your oponents Frigate.';
        } else if (JSON.parse(this.firstPlayerCruiserPosition).includes(secondPlayerStrike) && !this.secondPlayerHit.includes(secondPlayerStrike)) {
          this.secondPlayerHit.push(secondPlayerStrike);
          localStorage.setItem('playerTwoStrike', 'success');
          this.playerTwoScoreInfo = 'You have a hit on your oponents Cruiser.';
        } else if (JSON.parse(this.firstPlayerSubmarinePosition).includes(secondPlayerStrike) && !this.secondPlayerHit.includes(secondPlayerStrike)) {
          this.secondPlayerHit.push(secondPlayerStrike);
          localStorage.setItem('playerTwoStrike', 'success');
          this.playerTwoScoreInfo = 'You have a hit on your oponents Submarine.';
        } else if (JSON.parse(this.firstPlayerDestroyerPosition).includes(secondPlayerStrike) && !this.secondPlayerHit.includes(secondPlayerStrike)) {
          this.secondPlayerHit.push(secondPlayerStrike);
          localStorage.setItem('playerTwoStrike', 'success');
          this.playerTwoScoreInfo = 'You have a hit on your oponents Destroyer.';
        } else {
          if (!this.secondPlayerHit.includes(secondPlayerStrike) && !this.secondPlayerMiss.includes(secondPlayerStrike)) {
            this.secondPlayerMiss.push(secondPlayerStrike);
            localStorage.setItem('playerTwoStrike', 'failure');
            localStorage.setItem('playerOneStrike', 'success');
            this.playerTwoScoreInfo = 'You could not hit any of your oponents ship.';
          }
        }
      }
    }
    console.log(this.secondPlayerHit);
    console.log(localStorage.getItem('playerOneStrike'));
  }

  playerTwoStrikeSignal (playerTwoGridStrikeValue: string) {
    if (this.secondPlayerHit.includes(playerTwoGridStrikeValue)) {
      return 'hit';
    } else if (this.secondPlayerMiss.includes(playerTwoGridStrikeValue)) {
      return 'miss';
    } else {
      return 'noClass';
    }
  }

}
