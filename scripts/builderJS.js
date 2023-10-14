//Builder pattern
//Builder allows us to build very complex objects with huge amount of optional components in very efficient manner
//The point is that we create a class of our object and a Builder class , which will be used to modify our initial class
//Problem, whe have an object that represents video game, let's create options that will allow us to add enemies, weapons and characters
class Game {
  constructor() {
    this.elements = {};
  }
  // add element to the game
  addElement(elName, el) {
    this.elements[elName] = el;
  }
}

class BobTheBuilder {
  constructor() {
    this.game = new Game();
  }

  // Methods to modify the game.
  Setenemies(Enemies) {
    this.game.addElement("Enemies", Enemies);
  }

  SetLocations(Locations) {
    this.game.addElement("Locations", Locations);
  }

  SetWeapons(weapons) {
    this.game.addElement("Weapons", weapons);
  }
  //method to return finished game
  returnAll() {
    return this.game;
  }
}

let CustomGame = new BobTheBuilder();
CustomGame.SetLocations(["Forest", "Cave"]);
CustomGame.SetWeapons(["sword", "axe"]);
CustomGame.Setenemies(["skeletons", "spiders"]);

for (let el in CustomGame.returnAll().elements) {
  console.log(el + " are " + CustomGame.returnAll().elements[el]);
}

//As you can see we can easily customize the game with our builder by just calling methods
