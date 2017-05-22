//ID3 Decision Tree Algorithm


//main algorithm and prediction functions

var id3 = ( _s, target, features) => {
    var targets = _.unique(_s.pluck(target));
    if (targets.length == 1) {
        console.log("end node! " + targets[0]);
        return {type:"result", val: targets[0], name: targets[0], alias: targets[0] + randomTag() }; 
    }
    if (features.length == 0) {
        console.log("returning the most dominate feature!!!");
        var topTarget = mostCommon(_s.pluck(target));
        return {type:"result", val: topTarget, name: topTarget, alias: topTarget + randomTag() };
    }
    var bestFeature = maxGain( _s, target, features);
    var remainingFeatures = _.without( features, bestFeature);
    var possibleValues = _.unique( _s.pluck(bestFeature));
    console.log("node for " + bestFeature);
    var node = { name: bestFeature, alias: bestFeature + randomTag() };
    node.type = "feature";
    node.vals = _.map( possibleValues, (v) =>{
        console.log("creating a branch for "+v);
        var _newS = _( _s.filter( (x) => { 
            return x[bestFeature] == v; 
        }));
        var child_node = { name: v, alias: v + randomTag(), type: "feature_value"};
        child_node.child =  id3( _newS, target, remainingFeatures);
        return child_node;	
    });
    return node;

}

var predict = ( id3Model, sample) => {
    var root = id3Model;
    while(root.type != "result"){
        var attr = root.name;
        var sampleVal = sample[attr];
        var childNode = _.detect( root.vals, (x) => {
             return x.name == sampleVal; 
            });
        root = childNode.child;
    }
    return root.val;
}



//necessary math functions

var entropy = (vals) => {
    var uniqueVals = _.unique(vals);
    var probs = uniqueVals.map((x) => {
        return prob(x,vals);
    });
    var logVals = probs.map((p) => {
        return -p*log2(p);
     });
    return logVals.reduce((a,b) => { return a+b },0);
}

var gain = ( _s, target, feature) => {
    var attrVals = _.unique( _s.pluck(feature));
    var setEntropy = entropy( _s.pluck(target));
    var setSize = _s.size();
    var entropies = attrVals.map( (n) => {
        var subset = _s.filter( (x) => {
            return x[feature] === n;
        });
        return (subset.length/setSize)*entropy(_.pluck(subset,target));
    });
    var sumOfEntropies =  entropies.reduce( (a,b) => { return a+b },0);
    return setEntropy - sumOfEntropies;
}

var maxGain = ( _s, target, features) => {
    return _.max( features, (e) => {
        return gain(_s,target,e);
    });
}

var prob = ( val, vals) => {
    var instances = _.filter( vals, (x)  => {return x === val}).length;
    var total = vals.length;
    return instances/total;
}

var log2 = (n) => {
    return Math.log(n)/Math.log(2);
}


var mostCommon = (l) => {
    return  _.sortBy( l, (a) => {
	    return count(a,l);
    }).reverse()[0];
}

var count = (a,l) => {
    return _.filter( l, (b) => { return b === a}).length
}

var randomTag = () => {
    return "_r"+Math.round(Math.random()*1000000).toString();
}

//Display logic

var drawGraph = ( id3Model, divId) => {
    var g = new Array();
    g = addEdges( id3Model, g).reverse();
    window.g = g;
    var data = google.visualization.arrayToDataTable( g.concat(g));
    var chart = new google.visualization.OrgChart(document.getElementById(divId));
    google.visualization.events.addListener( chart, 'ready', () => {
        _.each( $('.google-visualization-orgchart-node'), (x) => {
            var oldVal = $(x).html();
            if (oldVal) {
                var cleanVal = oldVal.replace(/_r[0-9]+/,'');
                $(x).html(cleanVal);
            }
        }); 
    });
    chart.draw( data, { allowHtml: true });

}

var addEdges = ( node, g) => {
    if (node.type == 'feature') {
        _.each( node.vals, (m) => {
            g.push([ m.alias, node.alias,'']);
            g = addEdges( m, g);
        });
        return g;
    }
    if (node.type == 'feature_value') {
        g.push([node.child.alias,node.alias,'']);
        if (node.child.type != 'result') {
            g = addEdges(node.child,g);
        }
        return g;
    }
    return g;
}


var renderSamples = ( samples, $el, model, target, features) => {
    _.each( samples, (s) => {
        var features_for_sample = _.map( features, (x) => { return s[x] });
        $el.append("<tr><td>"+features_for_sample.join('</td><td>')+"</td><td><b>"+predict(model,s)+"</b></td><td>actual: "+s[target]+"</td></tr>");
    })
}

var renderTrainingData = (_training, $el, target, features) => {
    _training.each( (s) => {
	    $el.append( "<tr><td>" + _.map( features, (x) => { return s[x]; }).join('</td><td>')+"</td><td>"+s[target]+"</td></tr>");
    });
}

var calcError = ( samples, model, target) => {
    var total = 0;
    var correct = 0;
    _.each( samples, (s) => {
	total++;
	var pred = predict( model, s);
	var actual = s[target];
	if(pred == actual){
	    correct++;
	}
    });
    return correct/total;
}
