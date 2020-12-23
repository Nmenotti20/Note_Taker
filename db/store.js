const util = require("util");
const fs = require("fs");
const path = require("path");

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
    getNotes() {
      console.log("getNotes is running.....");
      //we need to read the notes, this gets the notes from db.json
      return readFileAsync(path.join(__dirname,"/db.json"),"utf8").then((notes) => {
        //return notes
        return notes;
      });
    }

    //addNotes
    addNotes() {
      console.log("addNotes is running.....");
      //we need to read the notes, this gets the notes from db.json
      return writeFileAsync(path.join(__dirname,"/db.json"),"utf8").then((notes) => {
        //return notes
        return notes;
      });
    }

    //removeNotes
    removeNotes() {
      console.log("removeNotes is running.....");
      //we need to read the notes, this gets the notes from db.json
      return readFileAsync(path.join(__dirname,"/db.json"),"utf8").then((notes) => {
        //return notes
        return notes;
      });
    }
  }

  module.exports = new Store();