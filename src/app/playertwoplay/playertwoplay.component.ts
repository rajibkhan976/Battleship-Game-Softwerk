import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-playertwoplay',
  templateUrl: './playertwoplay.component.html',
  styleUrls: ['./playertwoplay.component.css']
})
export class PlayertwoplayComponent implements OnInit {

  firstPlayerCarrierPosition: string[] = localStorage.getItem('playerOneCarrierPosition');
  firstPlayerFrigatePosition: string[] = localStorage.getItem('playerOneFrigatePosition');
  firstPlayerCruiserPosition: string[] = localStorage.getItem('playerOneCruiserPosition');
  firstPlayerSubmarinePosition: string[] = localStorage.getItem('playerOneSubmarinePosition');
  firstPlayerDestroyerPosition: string[] = localStorage.getItem('playerOneDestroyerPosition');
  @Input() playerTwoStrikeGridController: string;

  secondPlayerHit: string[] = [];
  secondPlayerMiss: string[] = [];
  playerTwo: string = 'Player two strike grid';

  constructor() { }

  playerTwoStrike (secondPlayerStrike: string) {
    if (this.firstPlayerCarrierPosition.includes(secondPlayerStrike)) {
      this.secondPlayerHit.push(secondPlayerStrike);
    } else if (this.firstPlayerFrigatePosition.includes(secondPlayerStrike)) {
      this.secondPlayerHit.push(secondPlayerStrike);
    } else if (this.firstPlayerCruiserPosition.includes(secondPlayerStrike)) {
      this.secondPlayerHit.push(secondPlayerStrike);
    } else if (this.firstPlayerSubmarinePosition.includes(secondPlayerStrike)) {
      this.secondPlayerHit.push(secondPlayerStrike);
    } else if (this.firstPlayerDestroyerPosition.includes(secondPlayerStrike)) {
      this.secondPlayerHit.push(secondPlayerStrike);
    } else {
      this.secondPlayerMiss.push(secondPlayerStrike);
    }
    console.log(this.secondPlayerHit);
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

  ngOnInit() {
  }

}
