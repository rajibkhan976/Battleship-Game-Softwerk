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
  playerOneCarrierPosition: string[] = [];
  playerOneFrigatePosition: string[] = [];
  playerOneCruiserPosition: string[] = [];
  playerOneSubmarinePosition: string[] = [];
  playerOneDestroyerPosition: string[] = [];

  constructor(private route: ActivatedRoute, private router: Router) { }

  getShipType () {
    for (var shipType in this.battleShips) {
      if (this.typeOfBattleShip === shipType) {
        this.sizeOfBattleShip = this.battleShips[shipType];
        this.instructionOne = 'You can position your ' + this.typeOfBattleShip + ' in ' + this.sizeOfBattleShip + ' different cells in the grid.';
      }
    }
  }

  positionShip (cellValue: string) {
    if (this.typeOfBattleShip === 'Carrier') {
      for (var carrierPositionCounter = 0; carrierPositionCounter < 1; carrierPositionCounter++) {
        if (this.playerOneCarrierPosition.length < 5 && !this.playerOneCarrierPosition.includes(cellValue)) {
          this.playerOneCarrierPosition.push(cellValue);
        } else {
          break;
        }
      }
    }
    if (this.typeOfBattleShip === 'Frigate') {
      for (var frigatePositionCounter = 0; frigatePositionCounter < 1; frigatePositionCounter++) {
        if (this.playerOneFrigatePosition.length < 4 && !this.playerOneFrigatePosition.includes(cellValue)) {
          this.playerOneFrigatePosition.push(cellValue);
        } else {
          break;
        }
      }
    }
    if (this.typeOfBattleShip === 'Cruiser') {
      for (var cruiserPositionCounter = 0; cruiserPositionCounter < 1; cruiserPositionCounter++) {
        if (this.playerOneCruiserPosition.length < 3 && !this.playerOneCruiserPosition.includes(cellValue)) {
          this.playerOneCruiserPosition.push(cellValue);
        } else {
          break;
        }
      }
    }
    if (this.typeOfBattleShip === 'Submarine') {
      for (var submarinePositionCounter = 0; submarinePositionCounter < 1; submarinePositionCounter++) {
        if (this.playerOneSubmarinePosition.length < 3 && !this.playerOneSubmarinePosition.includes(cellValue)) {
          this.playerOneSubmarinePosition.push(cellValue);
        } else {
          break;
        }
      }
    }
    if (this.typeOfBattleShip === 'Destroyer') {
      for (var destroyerPositionCounter = 0; destroyerPositionCounter < 1; destroyerPositionCounter++) {
        if (this.playerOneDestroyerPosition.length < 2 && !this.playerOneDestroyerPosition.includes(cellValue)) {
          this.playerOneDestroyerPosition.push(cellValue);
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
