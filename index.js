// inquirer (node package)
const fs = require('fs');
const inquirer = require("inquirer");
const {Triangle, Circle, Square} = require('./lib/shapes.js');

//  prompt 
const prompt = () => {
    return inquirer.prompt([
        {
            type:'input',
            name: 'text',
            message: ' Enter three characters that you wish displayed:',
            validate: value => value.length <=3
        },
        {
            type:'input',
            name: 'textColor',
            message: ' Enter text color you wish to display:',
        },
        {
            type:'list',
            name: 'shape',
            message: ' Select from the following list:',
            choices: ['Triangle', 'Circle', 'Square']
        },
        {
            type:'input',
            name: 'shapeColor',
            message: ' Enter shape color you wish to display:',
        },
    ]);
};
const createSVG = async () => {
    const answers = await prompt();
    let shape;
    switch (answers.shape) {
        case 'Triangle':
            shape = new Triangle();
            break;
        case 'Square':
            shape = new Square();
            break;
        case 'Circle':
            shape = new Circle();
            break;        
    }
    
    shape.setColor(answers.shapeColor);
    const svgData = `<svg xmlns="http://www.w3.org/2000/svg" viewBox='0 0 300 200'>
    ${shape.render()}
    <text x="150" y="100" font-size="20" text-anchor="middle" fill="${answers.textColor}">${answers.text}</text>
</svg>`;
    fs.writeFileSync('logo.svg', svgData);
    console.log('created logo.svg');
}; 

createSVG();
