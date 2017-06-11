const mnist = require('mnist');
const synaptic = require('synaptic');

const set = mnist.set(40); // Przypisujemy zmiennej set randomowe obrazy, odpowiednio 40 dla treningu

const trainingSet = set.training;
const testSet = mnist[0].set(1, 10); // Ustawia rangę, od 1 do 50, czyli 10 obrazków dla testu

// create the layers 
const Layer = synaptic.Layer;
const Network = synaptic.Network;
const Trainer = synaptic.Trainer;

const inputLayer = new Layer(2500); // Nasz input -> 2500 = 50 * 50 (nasze obrazy są rozmiaru 50x50)
const hiddenLayer = new Layer(40);
const outputLayer = new Layer(10); // 10 ponieważ mamy 10 wyjść, od 0 do 9. Gdzie 0 to bomby, a reszta nie

// connect the layers 
inputLayer.project(hiddenLayer);
hiddenLayer.project(outputLayer);

const myNetwork = new Network({
    
    // set the layers 
    input: inputLayer,
    hidden: [hiddenLayer],
    output: outputLayer
});

const trainer = new Trainer(myNetwork);
trainer.train(trainingSet, {
    rate: .1, // szybkość uczenia się
    iterations: 100, // ilość iteracji
    error: .1, // najniższy prób błędu
    shuffle: true, // czy nasz zestaw treningowy ma być wybierany losowo
    log: 1, // wyświetlanie po kolei iteracji w console
    cost: Trainer.cost.CROSS_ENTROPY
});

console.log("------------------------------------");

      var output = myNetwork.activate(testSet[0].input);
      console.log(output);
      console.log("------------------------------------");

      var maximum = output.reduce(function(p,c) { return p > c ? p : c; });
      var nominators = output.map(function(e) { return Math.exp(e - maximum); });
      var denominator = nominators.reduce(function (p, c) { return p + c; });
      var softmax = nominators.map(function(e) { return e / denominator; });

      var maxIndex = 0;
      softmax.reduce(function(p, c, i){if (p < c) {maxIndex = i; return c;} else return p;});

      var result = [];

      for (var i = 0; i < output.length; i++)
      {
          if (i == maxIndex)
              result.push(1);
          else
              result.push(0);
      }

      console.log(result);
      console.log("------------------------------------");
      console.log("testSet[0].output");
      console.log("------------------------------------");
      console.log(testSet[0].output);
      console.log("------------------------------------");

      var nnDigit = 0;

      for (var i = 0; i <= 9; i++)
      {
          if (result[i] == 1)
          {
              nnDigit = i;
              break;
          }
      }

      var testDigit = 0;

      for (var i = 0; i <= 9; i++)
      {
          if (testSet[0].output[i] == 1)
          {
              testDigit = i;
              break;
          }
      }

      if(nnDigit > 0) {
        console.log("Results:");
        console.log("------------------------------------");
        console.log("The neural network believed it wasn't a bomb");
        console.log("------------------------------------");
      } else {
        console.log("Results:");
        console.log("------------------------------------");
        console.log("The neural network believed it was a bomb");
        console.log("------------------------------------");
      }