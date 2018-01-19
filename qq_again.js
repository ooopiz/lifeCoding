str = 'abcdefgab'

len = str.length;
flag = false;

function countInstances(string, word) {
   return string.split(word).length - 1;
}

for(i=0; i<len-1; i++) {
    compareStr = str.substring(i, i+2);
    count = countInstances(str, compareStr);
    
    if (count > 1) flag = true;
}

console.log(flag)
