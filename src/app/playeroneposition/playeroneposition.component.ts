import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-playeroneposition',
  templateUrl: './playeroneposition.component.html',
  styleUrls: ['./playeroneposition.component.css']
})
export class PlayeronepositionComponent implements OnInit {

  battleShips: any = {
    'Carrier':   5,
    'Frigate':   4,
    'Cruiser':   3,
    'Submarine': 3,
    'Destroyer': 2
  };
  playerOne: string = 'Player One Setup';
  typeOfBattleShip: string;
  sizeOfBattleShip: number;
  instructionOne: string;
  @Input() toggleGrid: string;
  playerOneCarrierPosition: string[] = [];
  playerOneFrigatePosition: string[] = [];
  playerOneCruiserPosition: string[] = [];
  playerOneSubmarinePosition: string[] = [];
  playerOneDestroyerPosition: string[] = [];
  @Input() gridTogglar: number;
  @Output() incrementGridTogglar = new EventEmitter<number>();

  constructor(private route: ActivatedRoute, private router: Router) { }

  getShipType () {
    for (var shipType in this.battleShips) {
      if (this.typeOfBattleShip === shipType) {
        this.sizeOfBattleShip = this.battleShips[shipType];
        this.instructionOne = 'You can position your ' + this.typeOfBattleShip + ' in ' + this.sizeOfBattleShip + ' different cells in the grid.';
      }
    }
  }

  onClickIncrement () {
    this.incrementGridTogglar.emit();
  }

  positionShip (cellValue: string) {
      if (this.typeOfBattleShip === 'Carrier') {
        for (var carrierPositionCounter = 0; carrierPositionCounter < 1; carrierPositionCounter++) {
          if (this.playerOneCarrierPosition.length < 5 && this.gridTogglar < 17 && !this.playerOneCarrierPosition.includes(cellValue)) {
            this.onClickIncrement ();
            this.playerOneCarrierPosition.push(cellValue);
            if (this.playerOneCarrierPosition.length === 5) {
              localStorage.setItem('playerOneCarrierPosition', JSON.stringify(this.playerOneCarrierPosition));
            }
          } else {
            break;
          }
        }
      }
      if (this.typeOfBattleShip === 'Frigate') {
        for (var frigatePositionCounter = 0; frigatePositionCounter < 1; frigatePositionCounter++) {
          if (this.playerOneFrigatePosition.length < 4 && this.gridTogglar < 17 && !this.playerOneFrigatePosition.includes(cellValue)) {
            this.onClickIncrement ();
            this.playerOneFrigatePosition.push(cellValue);
            if (this.playerOneFrigatePosition.length === 4) {
              localStorage.setItem('playerOneFrigatePosition', JSON.stringify(this.playerOneFrigatePosition))
            }
          } else {
            break;
          }
        }
      }
      if (this.typeOfBattleShip === 'Cruiser') {
        for (var cruiserPositionCounter = 0; cruiserPositionCounter < 1; cruiserPositionCounter++) {
          if (this.playerOneCruiserPosition.length < 3 && this.gridTogglar < 17 && !this.playerOneCruiserPosition.includes(cellValue)) {
            this.onClickIncrement ();
            this.playerOneCruiserPosition.push(cellValue);
            if (this.playerOneCruiserPosition.length === 3) {
              localStorage.setItem('playerOneCruiserPosition', JSON.stringify(this.playerOneCruiserPosition));
            }
          } else {
            break;
          }
        }
      }
      if (this.typeOfBattleShip === 'Submarine') {
        for (var submarinePositionCounter = 0; submarinePositionCounter < 1; submarinePositionCounter++) {
          if (this.playerOneSubmarinePosition.length < 3 && this.gridTogglar < 17 && !this.playerOneSubmarinePosition.includes(cellValue)) {
            this.onClickIncrement ();
            this.playerOneSubmarinePosition.push(cellValue);
            if (this.playerOneSubmarinePosition.length === 3) {
              localStorage.setItem('playerOneSubmarinePosition', JSON.stringify(this.playerOneSubmarinePosition));
            }
          } else {
            break;
          }
        }
      }
      if (this.typeOfBattleShip === 'Destroyer') {
        for (var destroyerPositionCounter = 0; destroyerPositionCounter < 1; destroyerPositionCounter++) {
          if (this.playerOneDestroyerPosition.length < 2 && this.gridTogglar < 17 && !this.playerOneDestroyerPosition.includes(cellValue)) {
            this.onClickIncrement ();
            this.playerOneDestroyerPosition.push(cellValue);
            if (this.playerOneDestroyerPosition.length === 2) {
              localStorage.setItem('playerOneDestroyerPosition', JSON.stringify(this.playerOneDestroyerPosition));
            }
          } else {
            break;
          }
        }
      }
    }

  setClass (cellPosition: string) {
    if (this.playerOneCarrierPosition.includes(cellPosition)) {
      return 'Carrier';
    } else if (this.playerOneFrigatePosition.includes(cellPosition)) {
      return 'Frigate';
    } else if (this.playerOneCruiserPosition.includes(cellPosition)) {
      return 'Cruiser';
    } else if (this.playerOneSubmarinePosition.includes(cellPosition)) {
      return 'Submarine';
    } else if (this.playerOneDestroyerPosition.includes(cellPosition)) {
      return 'Destroyer';
    } else {
      return 'Noclass';
    }
  }

  ngOnInit() {
  }

}
