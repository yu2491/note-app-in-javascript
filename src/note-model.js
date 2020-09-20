'use strict'

class Note {

  constructor(id, text) {
    this.text = text;
    this.id = id;
  }

  getNote() {
    return this.text;
  }
}
