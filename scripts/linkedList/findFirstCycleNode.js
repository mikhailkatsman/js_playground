var detectCycle = function(head) {
    let slow = head;
    let fast = head;
    
    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
        
        if (slow === fast) {
            // cycle detected
            let ptr1 = head;
            let ptr2 = slow;
            
            while (ptr1 !== ptr2) {
                ptr1 = ptr1.next;
                ptr2 = ptr2.next;
            }
            
            return ptr1; // return the start of the cycle
        }
    }
    
    return null; // no cycle detected
};

let list = {val: 1, next: {val: 2, next: {val: 3, next: {val: 4, next: null}}}};

// ADD CYCLE TO LIST
let lastNode = list;
while (lastNode.next !== null) {
	lastNode = lastNode.next;
}
lastNode.next = list.next;

console.log(detectCycle(list));