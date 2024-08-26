import { AppState } from "../AppState.js";

class PlayersService {


  increaseScore(playerName) {
    console.log(`increasing score for`, playerName)
    const foundPlayer = AppState.players.find(player => player.name == playerName)
    foundPlayer.score++
  }
  decreaseScore(playerName) {
    console.log(`increasing score for`, playerName)
    const foundPlayer = AppState.players.find(player => player.name == playerName)
    foundPlayer.score--
  }






}

export const playersService = new PlayersService()