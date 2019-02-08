/* 
 * Title: buero-ao
 * Author: Matthias Jäger
 */


let canvas;
let font;
let points;
let bounds;

function preload() {
    font = loadFont('fonts/BueroAO.ttf')

}

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent('#sCanvas');

    points = font.textToPoints('A', 0, 0, 10, {
        sampleFactor: 5,
        simplifyThreshold: 0
    });
    bounds = font.textBounds('A', 0, 0, 10);

}

function draw() {
    background(200);
    fill(0)
    translate(-bounds.x * width / bounds.w, -bounds.y * height / bounds.h);
    for (let i = 0; i < points.length; i++) {
        let p = points[i];
        point(
            p.x * width / bounds.w +
            sin(20 * p.y / bounds.h + millis() / 1000) * width / 30,
            p.y * height / bounds.h
        );
    }
}