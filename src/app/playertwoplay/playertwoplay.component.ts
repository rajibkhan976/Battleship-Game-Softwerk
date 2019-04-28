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

  @Input() playerTwoStrikeGridController: string;

  constructor() { }

  playerTwoStrike (secondPlayerStrike: string) {
    if (localStorage.getItem('playerOneStrike') === 'failure') {
      if (JSON.parse(this.firstPlayerCarrierPosition).includes(secondPlayerStrike)) {
        this.secondPlayerHit.push(secondPlayerStrike);
        localStorage.setItem('playerTwoStrike', 'success');
      } else if (JSON.parse(this.firstPlayerFrigatePosition).includes(secondPlayerStrike)) {
        this.secondPlayerHit.push(secondPlayerStrike);
        localStorage.setItem('playerTwoStrike', 'success');
      } else if (JSON.parse(this.firstPlayerCruiserPosition).includes(secondPlayerStrike)) {
        this.secondPlayerHit.push(secondPlayerStrike);
        localStorage.setItem('playerTwoStrike', 'success');
      } else if (JSON.parse(this.firstPlayerSubmarinePosition).includes(secondPlayerStrike)) {
        this.secondPlayerHit.push(secondPlayerStrike);
        localStorage.setItem('playerTwoStrike', 'success');
      } else if (JSON.parse(this.firstPlayerDestroyerPosition).includes(secondPlayerStrike)) {
        this.secondPlayerHit.push(secondPlayerStrike);
        localStorage.setItem('playerTwoStrike', 'success');
      } else {
        this.secondPlayerMiss.push(secondPlayerStrike);
        localStorage.setItem('playerTwoStrike', 'failure');
        localStorage.setItem('playerOneStrike', 'success');
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
