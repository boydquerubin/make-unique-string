function makeUnique(str) {
    let charCount = {};
    let result = '';

    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        
        if (!charCount[char]) {
            result += char;
            charCount[char] = true;
        }
    }

    return result;
}

console.log(makeUnique('helloworld'));
console.log(makeUnique('iwanttoclimbamountain'));
