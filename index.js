// inquirer (node package)
const inquirer = require("inquirer");

const fs = require('fs');
const {Triangle, Square, Circle } = require('./lib/shapes');

function writeToFile(fileName, answers) {
    let svgString = '';
    // information provide in readme for the assignment
    svgString = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';
    svgString += '<g>';
    svgString += `${answers.shapes}`;

    let  shapeSelection;
    if ()
}