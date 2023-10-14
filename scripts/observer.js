//observer
//this pattern allows you to notify objects about some events
//this patern needs you to have publisher and observer.
//Publisher controlls list of observers(he adds , removes, notifies observers)
//Observer is just a thing that has notify method, which is responsible fo notification
//Problem: we want to notify people about updates in game
class User {
  constructor(name) {
    this.name = name;
  }

  update(info) {
    console.log(this.name + " received the news: " + info);
  }
}

class Publisher {
  constructor() {
    this.users = [];
  }

  addUser(user) {
    this.users.push(user);
  }

  removeUser(user) {
    this.users = this.users.filter((el) => el !== user);
  }
// notifies all users
  notify(info) {
    for (let user of this.users) {
      user.update(info);
    }
  }
}

let game = new Publisher();

let player1 = new User("player1");
let player2 = new User("player2");
let player3 = new User("player3");
game.addUser(player1);
game.addUser(player2);
game.addUser(player3);

game.removeUser(player1);

game.notify("New update has been published published");
//As we can see this code creates three users and one publisher , then removes the first one and then notifies the remaining users
