import { Player } from "./models/players.js";
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'


class ObservableAppState extends EventEmitter {

  player = [
    new Player('Elijah'),
    new Player('Jake'),
    new Player(`Mat`),
    new Player(`Autumn`),
    new Player(`Joe`)
  ]






}


export const AppState = createObservableProxy(new ObservableAppState())