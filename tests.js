var assert = require("assert");
var brickEditor = require("./brick-editor.js");

var actual = null;
var expected = null;
var message = null;

assert(brickEditor.getIndent(...) === "", "error message"
