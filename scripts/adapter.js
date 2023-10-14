//Adapter Pattern
//Adapter is a pattern is some kind of bridge that allows objects with different interfaces work together
//The point is that adapter converts one interface the way another will understand it
//Problem: we have two printer functions new and old, we want to use a new one, but huge amount of code was already writen with th old one, instead ofrewriting them we can create an adapter

class OldPrinter {
  OldPrint(text) {
    console.log("Text " +text);
  }
}
class NewPrinter {
  NewPrint(Info, text, data) {
    console.log("Text "+text);
    console.log("Info "+Info);
    console.log("data "+data);
  }
}

class PrintetAdapter {
  constructor() {
    this.newPrinter = new NewPrinter();
  }
// Adapting OldPrint
  OldPrint(text) {
    this.newPrinter.NewPrint("Lorem","ipsum", text);
  }
}

let printer = new PrintetAdapter();
printer.OldPrint("adapted text");

//As we can see we adapted method from Oldprinter to work with NewPrinter
