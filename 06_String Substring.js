function solve(wordToSearch, textForSearching) {
    'use strict';

    const hasWord = textForSearching
    .toLowerCase()
    .split(' ')
    .includes(wordToSearch)  // още тук става ясно, че думата трябва да се съдържа

    if (hasWord) {
        console.log(wordToSearch)
    }
    else {
        console.log(`${wordToSearch} not found!`) 
    }

}

solve('javascript',
'JavaScript is the best programming language'
)