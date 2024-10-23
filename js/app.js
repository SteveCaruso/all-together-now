import * as Bezier from './bezier.js';
import {Animate} from './animate.js'; 
import {Director} from './director.js';
import {UI} from './ui_elements.js';

//The App
var app = new PIXI.Application();
await app.init({
    width:640,
    height:480,
    backgroundColor: 0x000000
});
var stage = app.stage;
var view = app.canvas;

//Add view to the document
document.body.appendChild(view);

//Set Director's app
Director.app = app;

//Let's go!
//await PIXI.Assets.load('myTexture.png');
//let sprite = Sprite.from('myTexture.png');

/*

//Let's use the fetch API to fetch some data

//First we need a url to fetch.
//Pick one from here: https://github.com/jdorfman/awesome-json-datasets
const url = '';

//Let's await a fetch to grab the data
let response = await fetch(url);

//If there was an error, we can throw one
if (!response.ok) {
    throw "Whoops!";
}

//Otherwise let's read the data as JSON
const json = await response.json();

//Then let's parse it
const data = JSON.parse(json);

//And here we can display the data...


*/