yes = 'Q';
no = ' ';
max = 11;
mid = Math.ceil(max/2);
 
for(i=1; i<=max; i++) {
    x = Math.abs(mid - i);
    y = max - (x*2);
    start = x + 1;
    end = x + y;
 
    output = '';
    for(j=1; j<=max; j++) {
       if((j >= start) && (j <= end)) {
           output = output + yes;
       } else {
           output = output + no;
       }
    }
    console.log(output);
}
 
console.log('挖洞');
 
for(i=1; i<=max; i++) {
    x = Math.abs(mid - i);
    y = max - (x*2);
    start = x + 1;
    end = x + y;
 
    output = '';
    for(j=1; j<=max; j++) {
       if((j == start) || (j == end)) {
           output = output + yes;
       } else {
           output = output + no;
       }
    }
    console.log(output);
}
