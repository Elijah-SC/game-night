export class players {
  constructor(name) {

    this.name = name;
    this.score = 0;

  }


  get playerHTMLTemplate() {
    return `<div class="col-12 d-flex justify-content-around">
        <h1>${this.name}</h1>
        <div class="d-flex">
          <button onclick="app.PlayersController.decreaseScore('${this.name}')">-</button><h2>${this.score}</h2><button onclick="app.PlayersController.increaseScore('${this.name}')">+</button>
        </div>
        </div>`

  }
}