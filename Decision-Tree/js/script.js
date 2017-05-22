$(document).ready(function(){
      $("#saper").click(function(e){
            e.preventDefault();
            var testModel = id3(saper_examples,'isBomb',saper_features);
            drawGraph(testModel,'canvas');
            renderSamples(saper_samples,$("#samples"),testModel,'isBomb',saper_features);
            renderTrainingData(saper_examples,$("#training"),'isBomb',saper_features);
      });
});