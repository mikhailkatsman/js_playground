// REVERSE LINKED LIST
var reverseList = function (head) {
	if (head === null || head.next === null) {
		return head;
	}

	var slice = reverseList(head.next);
	head.next.next = head;
	head.next = null;

	return slice;
};

console.log(
	JSON.stringify(reverseList({
		val: 1,
		next: {
			val: 2,
			next: {
				val: 3,
				next: {
					val: 4,
					next: {
						val: 5,
						next: null,
					},
				},
			},
		},
	})
));
