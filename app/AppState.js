import { players } from "./models/players.js";
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'


class ObservableAppState extends EventEmitter {

  scoreToWin = 11

  players = [
    new players('Elijah'),
    new players('Jake'),
    new players(`Mat`),
    new players(`Autumn`),
    new players(`Joe`),
  ]








}


export const AppState = createObservableProxy(new ObservableAppState())

console.log('Players', AppState.players);

