const util = require("util");
const fs = require("fs");

// This package will be used to generate our unique ids. https://www.npmjs.com/package/uuid
const uuidv1 = require("uuid/v1");
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);


// If notes isn't an array or can't be turned into one, send back a new empty array



// Add a unique id to the note using uuid package



// Get all notes, add the new note, write all the updated notes, return the newNote



// Get all notes, remove the note with the given id, write the filtered notes


//**********************************************************************//
class Store {

    //write method
    //getNotes

    //addNotes

    //removeNotes



    // // Just like constructor functions, classes can accept arguments
    // constructor(area, perimeter) {
    //   this.title = area;
    //   this.body = perimeter;
    // }
  
    // printInfo() {
    //   console.log(`Title: ${this.tile}`);
    //   console.log(`Body: ${this.body}`);
    // }
  }
  
  //const Store = new Store(25, 25);
  
  //store.printInfo();

  module.exports = new Store();
  