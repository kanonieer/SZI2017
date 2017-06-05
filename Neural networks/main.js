$(document).ready(function() {

var net = new brain.NeuralNetwork();

var training_data = [
            {input: { r: 1.0, g: 1.0, b: 1.0 }, output: { grey: 1 }},
            {input: { r: 1.0, g: 0.9, b: 0.9 }, output: { grey: 1 }},
            {input: { r: 0.9, g: 0.9, b: 0.9 }, output: { grey: 1 }},
            {input: { r: 0.9, g: 1.0, b: 1.0 }, output: { grey: 1 }},
            {input: { r: 0.9, g: 1.0, b: 0.9 }, output: { grey: 1 }},
            {input: { r: 0.7, g: 0.8, b: 0.8 }, output: { grey: 1 }},
            {input: { r: 0.6, g: 0.7, b: 0.7 }, output: { grey: 1 }},
            {input: { r: 0.8, g: 0.8, b: 0.8 }, output: { grey: 1 }},
            // {input: { r: 0.9, g: 0.9, b: 0.8 }, output: { grey: 1 }},
            // {input: { r: 0.9, g: 0.9, b: 0.7 }, output: { grey: 1 }},
            {input: { r: 0.0, g: 1.0, b: 0.0 }, output: { green: 1 }},
            {input: { r: 0.6, g: 1.0, b: 0.1 }, output: { green: 1 }},
            {input: { r: 0.6, g: 0.7, b: 0.5 }, output: { green: 1 }},
            {input: { r: 0.7, g: 0.9, b: 0.2 }, output: { green: 1 }},
            {input: { r: 0.3, g: 0.8, b: 0.1 }, output: { green: 1 }},
            {input: { r: 0.2, g: 0.4, b: 0.1 }, output: { green: 1 }},
            {input: { r: 0.8, g: 1.0, b: 0.6 }, output: { green: 1 }},
            {input: { r: 0.0, g: 0.6, b: 0.1 }, output: { green: 1 }},
            // {input: { r: 0.7, g: 1.0, b: 0.4 }, output: { green: 1 }},
            // {input: { r: 0.9, g: 1.0, b: 0.8 }, output: { green: 1 }},
            {input: { r: 0.9, g: 0.8, b: 0.5 }, output: { brown: 1 }},
            {input: { r: 0.8, g: 0.7, b: 0.5 }, output: { brown: 1 }},
            {input: { r: 0.8, g: 0.5, b: 0.3 }, output: { brown: 1 }},
            {input: { r: 0.8, g: 0.8, b: 0.6 }, output: { brown: 1 }},
            {input: { r: 0.8, g: 0.4, b: 0.1 }, output: { brown: 1 }},
            {input: { r: 0.7, g: 0.5, b: 0.0 }, output: { brown: 1 }},
            {input: { r: 0.6, g: 0.5, b: 0.0 }, output: { brown: 1 }},
            {input: { r: 0.5, g: 0.5, b: 0.0 }, output: { brown: 1 }},
            // {input: { r: 0.7, g: 0.6, b: 0.3 }, output: { brown: 1 }},
            // {input: { r: 0.6, g: 0.3, b: 0.0 }, output: { brown: 1 }},
            {input: { r: 0.0, g: 0.0, b: 0.0 }, output: { black: 1 }},
            {input: { r: 0.0, g: 0.0, b: 0.1 }, output: { black: 1 }},
            {input: { r: 0.0, g: 0.1, b: 0.0 }, output: { black: 1 }},
            {input: { r: 0.1, g: 0.1, b: 0.0 }, output: { black: 1 }},
            {input: { r: 0.2, g: 0.0, b: 0.0 }, output: { black: 1 }},
            {input: { r: 0.0, g: 0.2, b: 0.1 }, output: { black: 1 }},
            {input: { r: 0.1, g: 0.1, b: 0.1 }, output: { black: 1 }},
            {input: { r: 0.1, g: 0.0, b: 0.3 }, output: { black: 1 }},
            // {input: { r: 0.0, g: 0.0, b: 0.2 }, output: { black: 1 }},
            // {input: { r: 0.1, g: 0.0, b: 0.1 }, output: { black: 1 }},
            {input: { r: 1.0, g: 0.0, b: 0.0 }, output: { red: 1 }},
            {input: { r: 0.9, g: 0.2, b: 0.2 }, output: { red: 1 }},
            {input: { r: 0.8, g: 0.0, b: 0.0 }, output: { red: 1 }},
            {input: { r: 0.7, g: 0.1, b: 0.2 }, output: { red: 1 }},
            {input: { r: 0.8, g: 0.1, b: 0.0 }, output: { red: 1 }},
            {input: { r: 0.9, g: 0.0, b: 0.9 }, output: { red: 1 }},
            {input: { r: 0.7, g: 0.1, b: 0.0 }, output: { red: 1 }},
            {input: { r: 0.8, g: 0.2, b: 0.0 }, output: { red: 1 }},
            // {input: { r: 0.9, g: 0.2, b: 0.1 }, output: { red: 1 }},
            // {input: { r: 1.0, g: 0.0, b: 0.2 }, output: { red: 1 }},
            {input: { r: 0.0, g: 0.0, b: 1.0 }, output: { blue: 1 }},
            {input: { r: 0.3, g: 0.4, b: 1.0 }, output: { blue: 1 }},
            {input: { r: 0.2, g: 0.1, b: 0.9 }, output: { blue: 1 }},
            {input: { r: 0.1, g: 0.4, b: 1.0 }, output: { blue: 1 }},
            {input: { r: 0.0, g: 0.1, b: 0.6 }, output: { blue: 1 }},
            {input: { r: 0.1, g: 0.0, b: 0.5 }, output: { blue: 1 }},
            {input: { r: 0.1, g: 0.1, b: 0.7 }, output: { blue: 1 }},
            // {input: { r: 0.1, g: 0.1, b: 0.7 }, output: { blue: 1 }},
            // {input: { r: 0.6, g: 0.8, b: 1.0 }, output: { blue: 1 }},
            {input: { r: 0.4, g: 0.1, b: 1.0 }, output: { blue: 1 }}];

net.train(training_data, {
  errorThresh: 0.005,  // próg błędu do osiągnięcia
  iterations: 20000,   // maksymalna liczba iteracji treningu
  log: true,           // console.log() pokazany progres postępu
  logPeriod: 10,       // liczba iteracji pomiędzy console.log()
  learningRate: 0.3    // stopień uczenia się
})

var run1 = net.toFunction();
var run2 = net.toFunction();
var run3 = net.toFunction();
var run4 = net.toFunction();
var run5 = net.toFunction();
var run6 = net.toFunction();
var run7 = net.toFunction();
var run8 = net.toFunction();
var run9 = net.toFunction();
var run10 = net.toFunction();

var output1 = run1({ r: 0.6, g: 0.8, b: 0.3 });
var output2 = run2({ r: 0.4, g: 0.5, b: 0.1 });
var output3 = run3({ r: 0.2, g: 1.0, b: 0.1 });
var output4 = run4({ r: 0.2, g: 0.4, b: 0.1 });
var output5 = run5({ r: 0.1, g: 1.0, b: 0.6 });
var output6 = run6({ r: 0.0, g: 1.0, b: 0.0 });
var output7 = run7({ r: 0.5, g: 0.9, b: 0.1 });
var output8 = run8({ r: 0.6, g: 0.9, b: 0.0 });
var output9 = run9({ r: 0.7, g: 0.8, b: 0.5 });
var output10 = run10({ r: 0.8, g: 1.0, b: 0.4 });

console.log(run1.toString());
console.log(net);
console.log(output1);
console.log(output2);
console.log(output3);
console.log(output4);
console.log(output5);
console.log(output6);
console.log(output7);
console.log(output8);
console.log(output9);
console.log(output10);

});