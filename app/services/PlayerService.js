import { AppState } from "../AppState.js";

class PlayersService {

  logPlayers() {
    console.log(AppState.players)

  }



}

export const playersService = new PlayersService()