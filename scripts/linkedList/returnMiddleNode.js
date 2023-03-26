var middleNode = function(head) {
    let curRef = head;
    let total = 0;
    let index = 0;

    while (curRef !== null) {
        total++;
        curRef = curRef.next;
    }

    curRef = head;
    
    while (index !== Math.floor(total / 2)) {
        index++;
        curRef = curRef.next;
    }

    return curRef;
};

console.log(middleNode({val:1, next: {val:2, next: {val:3, next: {val:4, next: {val:5, next: null}}}}}));