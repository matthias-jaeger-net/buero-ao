/**
 * Buero A/O
 * Projection of an svg logo shape refering to the mouse position
 *
 * Author: Matthias Jäger
 * Author-Github: @matthias-jaeger-net
 * Dependencies: https://cdnjs.com/libraries/p5.js
 * Project-Git: https://github.com/matthias-jaeger-net/buero-ao
 * Licence: MIT
 *
 * Graz, 2019
 */

// DOM ELEMEMENTS
var logos;
var logo;
var canvas;

// PROGRAM VARIABLES
var midpoint;
var direction;
var mousepos;

/** Stores the projected points */
var projection = [];

// EXECUTES ONCE AND BEFORE DRAW
function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  logos = select('#logos');
  canvas.parent(logos);

  for (var i = 0; i < 10; i++) {
    logo = createElement('div');
    logo.id('logo' + i);
    logo.class('logo');
    logo.parent(logos);
    logo.position(windowWidth / 2 - 250, windowHeight / 2 - 250);
    projection.push(logo);
  }

  // for (var i = 0; i < 10; i++) {
  //   var t = select('#logo' + i);
  //   t.position(random(windowWidth), random(windowHeight));
  // }

  midpoint = createVector(width * 0.5, height * 0.5);
  direction = createVector(0.0, 0.0);
  mousepos = createVector(0.0, 0.0);
}

// EXECUTES EVERY FRAME
function draw() {
  background("plum");
  if (mouseX != 0) {
    mousepos.set(mouseX, mouseY);
    direction = mousepos.sub(midpoint).normalize();

    point(midpoint.x, midpoint.y);

    midpoint.add(direction);
    line(width / 2, height / 2, midpoint.x, midpoint.y)

    for (var i = 0; i < projection.length; i++) {
      var t = select('#logo' + i);
      t.position((midpoint.x - 250), midpoint.y - 250);
    }
  }
}