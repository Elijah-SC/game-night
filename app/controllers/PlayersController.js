import { AppState } from "../AppState.js";
import { playersService } from "../services/PlayerService.js";

export class PlayersController {

  constructor() {

    console.log(`Players Controller is Loaded`);

    playersService.logPlayers()






    this.drawPlayers()
  }

  drawPlayers() {

    const players = AppState.players
    let playerHTML = ``
    players.forEach((player) => playerHTML += player.playerHTMLTemplate)
    const playersElm = document.getElementById(`playerTemplates`)
    playersElm.innerHTML = playerHTML
  }



}


