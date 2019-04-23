import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-playertwoplay',
  templateUrl: './playertwoplay.component.html',
  styleUrls: ['./playertwoplay.component.css']
})
export class PlayertwoplayComponent implements OnInit {

  @Input() firstPlayerCarrierPosition: string[];
  @Input() firstPlayerFrigatePosition: string[];
  @Input() firstPlayerCruiserPosition: string[];
  @Input() firstPlayerSubmarinePosition: string[];
  @Input() firstPlayerDestroyerPosition: string[];

  secondPlayerHit: string[] = [];
  secondPlayerMiss: string[] = [];

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
