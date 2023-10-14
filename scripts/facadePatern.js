//Facade
//This pattern provides a simple interfaces for working with complex subsystems.
//It provides not all the functionality of the subsystem you are working with, but what he provides is what we raelly need,
//That's why with help of this patern we can work with difficault libraries that have some difficult functioanly, but we only need like 10% of it
//So just like real facade that butifies building, this patern 'beautifies' your work with with difficult systems
//Problem: we have an objects room where multiple objects with different functions, but you nedd just few of them(phone can do everething, but you just need it as clock )

class Phone {
  alarmClock() {
    console.log("Alarm");
  }
  PhoneSomeone() {
    console.log("Phone");
  }

  PlayGame() {
    console.log("Game");
  }
}

class TV {
  News(Chanel) {
    console.log("News" + Chanel);
  }
  Movie() {
    console.log("Movie");
  }

  Otherstuff() {
    console.log("OtherStuff");
  }
}
class SmartRoom {
  constructor() {
    this.Phone = new Phone();
    this.TV = new TV();
  }
// function that smart room should execute each morning, using only one method from Phone and TV
  Morning(Chanel) {
    this.Phone.alarmClock();
    this.TV.News(Chanel);
  }
}

let SRoom = new SmartRoom();
SRoom.Morning("Channel232435");

//As you can see we have TV and Phone ,which have multiple methods, but our SmartRoom facade allows us to work with them in easier way
