function leetcode(str) {
    var flag = true;
    var splitWord = str.substring(0, 2);
    var splitResultArr = str.split(splitWord);
    var splitCompare = splitResultArr[1];
    if (splitResultArr.length <= 2) flag = false;
    splitResultArr.forEach(function(el, index) {
        if (index == 0) return;
        if (splitCompare !=  el) flag = false;
    });
    return flag;
}

console.log(leetcode('abcdeabcdeabcdec'))

