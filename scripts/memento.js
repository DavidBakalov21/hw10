// memento pattern
//the purpose of this this pattern is to save and restore state of an object
//There are like huge amount of tasks for this pattern: for example while playing in chess game you can save all the turns to replay them
//The point is that we have three classes Originator, Memento and CareTaker.
//Originator is the class which state we gonna save, Memento is the class that will have the state, Caretaker is the class which manages the array of mementos
//Problem: we have a simple game with turns(like chess) and we want to save player's turns

class Memento {
  constructor(Turn) {
    this.Turn = Turn;
  }
}

class Originator {
  constructor(Turn) {
    this.Turn = Turn;
  }
// Saves the current turn.
  save() {
    return new Memento(this.Turn);
  }
}

class Caretaker {
  constructor() {
    this.Turnhistory = [];
  }
//adds current turn to the history
  add(memento) {
    this.Turnhistory.push(memento);
  }
//show the turn you enter
  ShowTurn(i) {
    return this.Turnhistory[i];
  }
  // show the entire history
  ShowHistory() {
    return this.Turnhistory;
  }
}

let game = new Originator("Turn1");
let caretaker = new Caretaker();
caretaker.add(game.save());

game.Turn = "Turn2";
caretaker.add(game.save());

console.log(caretaker.ShowTurn(0).Turn);

for (let turn of caretaker.ShowHistory()) {
  console.log(turn.Turn);
}

//As we can see this code save turns with memento patern and can show the entire history or specific one
