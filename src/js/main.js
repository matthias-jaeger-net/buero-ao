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

let midpoint;

function setup() {
  createCanvas(windowWidth, windowHeight);
  midpoint = createVector(width * 0.5, height * 0.5);
}

function draw() {
  background(255);
  strokeWeight(4);
  point(midpoint.x, midpoint.y);
  line(midpoint.x, midpoint.y, mouseX, mouseY);
}