function getSentence(sentence) {
    return sentence;
  }
  

function searchVocals(sentence) {
    const vocals = ['a', 'e', 'i', 'o', 'u'];
    const result = [];
  

    for (let char of sentence.toLowerCase()) {
      if (vocals.includes(char) && !result.includes(char)) {
        result.push(char);
      }
    }
    
    return result;
  }
  

function deleteDuplicity(list) {
    return [...new Set(list)];
  }
  
  
  function getVocals(sentence) {
    const vocals = searchVocals(sentence);
    return vocals.join(',');
  }
  
  console.log(getSentence('la'));
  console.log(searchVocals('la le li lo lu'));
  console.log(deleteDuplicity(['i', 'i']));
  console.log(searchVocals('la le li lo lu pa pe pi po pu'));
  console.log(getVocals('Hello World!'));
  