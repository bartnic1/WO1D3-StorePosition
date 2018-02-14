
function returnIndices(sentence){
  var letterIndices = {};
  for(var index in sentence){
    if(sentence[index] === " "){
      continue;
    }
    if(letterIndices[sentence[index]] === undefined){
      letterIndices[sentence[index]] = [Number(index)];
    }
    else{
      letterIndices[sentence[index]].push(Number(index));
    }
  }
  return letterIndices;
}

console.log(returnIndices("lighthouse in the house"));