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

/** Constants */
var LOGOFULL = 500;
var LOGOHALF = LOGOFULL * 0.5;
var LOGONUM = 10;

/** Global dom elements */
var logos, logo, canvas;

/** Vectors */
var midpoint, direction, mousepos;

/** Projected elements */
var projection = [];

/** setup executes first  */
function setup() {
  // Full-width background canvas
  canvas = createCanvas(windowWidth, windowHeight);

  // Grab container element and set parenting
  logos = select('#logos');
  canvas.parent(logos);

  // Create logo divs inside of #logos
  for (var i = 0; i < LOGONUM; i++) {
    logo = createElement('div');
    logo.id('logo' + i);
    logo.class('logo');
    logo.parent(logos);
    logo.position(width / 2 - LOGOHALF, height / 2 - LOGOHALF);
    projection.push(logo);
  }

  /** Initialize vectors */
  midpoint = createVector(width * 0.5, height * 0.5);
  direction = createVector(0.0, 0.0);
  mousepos = createVector(0.0, 0.0);
}

/** draw executes each frame */
function draw() {
  // Only If the window is in focus ...
  if (mouseX != 0 && mouseY != 0) {
    mousepos.set(mouseX, mouseY);
    // Normalizing the result means a slow approch to the endpoint
    direction = mousepos.sub(midpoint).normalize();
    midpoint.add(direction);
    createProjection(width / 2, height / 2, midpoint.x, midpoint.y)
  }
}

/** Custom function that handles the projection effect */
function createProjection(x1, y1, x2, y2) {
  // Creating two vector objects
  var startVector = createVector(x1, y1);
  var endVector = createVector(x2, y2);
  // Get the direction from strat to end
  var dirVector = endVector.copy().sub(startVector);
  // Save the magnitude = length of the distance
  var magnitude = dirVector.mag();
  // Reduce to unit vector of length 1, then divide the 10 logos in
  dirVector.normalize();
  dirVector.mult(magnitude / 10);
  // This makes all no sense but is working nicely
  for (var i = 0; i < projection.length; i++) {
    startVector.add(dirVector);
    var tempLogo = select('#logo' + i);
    tempLogo.position((startVector.x - LOGOHALF), startVector.y - LOGOHALF);
  }
}