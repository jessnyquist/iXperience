function average(numbers_list) {
    var sum = 0;
    for (var i = 0; i < numbers_list.length; i++) {
        sum += numbers_list[i];
    }
    var average = sum / numbers_list.length;
    return average;
}

function assignGrade(grade) {
    if (grade < 60) {
        return 'F';
    } else if(grade < 70 && grade >= 60) {
        return 'D';
    }
    else if(grade >= 70 && grade < 80) {
        return 'C';
    }
    else if(grade >= 80 && grade < 90) {
        return 'B';
    }
    else if(grade >= 90) {
        return 'A';
    }
}

function pluralize(num, noun) {
    if(num > 1) {
        return num + " " + noun + "s";
    } else
        return num + " " + noun;
}

function longestWord(sentence) {
    var splitSentence = sentence.split(" ");
    var currLongestWord = " ";
    var currLongestLength = 0;
    for (var i = 0; i < splitSentence.length; i++) {
        var tempLength = splitSentence[i].length;
        if(tempLength > currLongestLength) {
            currLongestLength = tempLength;
            currLongestWord = splitSentence[i];
        }
    }
    return currLongestWord;
}

function palindrome(word) {
	var pal = false;
	for(var i = 0; i < word.length; i++){
		if(word[i] === word[word.length-1-i]){
			pal = true;
		}
		else{
			pal = false;
		}
	}
	if(pal){
		return 'yes';
	}
	else{
		return 'no';
	}
    // if (palindrome)
    //     return 'yes'
    // else 
    //     return 'no'
}

function letterCounter(phrase, letter) {
    var currCount=0;
    for(var i = 0; i < phrase.length; i++) {
        if(phrase[i] === letter)
            currCount++;
    }
    return currCount;
}

function longestPalindrome(sentence) {
 var longWord = longestWord(sentence);
 var isPal = palindrome(longWord);
    if (isPal === 'yes') {
        return longWord + " is a palindrome";
    }
    else {
        return longWord + " is not a palindrome";
    }
}

function areAnagrams (sentence1, sentence2) {
	// var firstSentence = sentence1.replace(/\s+/g,'');
	// var secondSentence = sentence2.replace(/\s+/g,'');
	sentence1.sort();
	sentence2.sort();
	if(sentence1 === sentence2){
		return 'yes';
	}
	else{
		return 'no';
	}
	
    // if (sentence1 and sentence2 are anagrams)
    //     return 'yes'
    // else
    //     return 'no'
}
