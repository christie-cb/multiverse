function getLinkedList(numArray) {
    let finalIndex = numArray.length - 1;
    let tail = {
        data: numArray[finalIndex],
        next: null,
    };
    let current = tail;
    for (let i = finalIndex - 1; i >= 0; i--) {
        let node = { 
            data: numArray[i],
            next: current,
        };
        current = node;
    }
    return current;
}

function linkedListPartition(linkedListHead, x) {
    // What's the brute force way to do it?
    let smallNodeValues = [];
    let largeNodeValues = [];
    let current = linkedListHead;
    while (current !== null) {
        if (current.data < x) {
            smallNodeValues.push(current.data);
        }
        current = current.next;
    }
    let smallerThan = getLinkedList(smallNodeValues);
    let tail = smallerThan;
    for (i = 1; i < smallNodeValues.length; i++) {
        let temp = tail.next;
        tail = temp;
    }
    current = linkedListHead;
    while (current !== null) {
        if (current.data >= x) {
            largeNodeValues.push(current.data);
        }
        current = current.next;
    }
    let largerThan = getLinkedList(largeNodeValues);
    tail.next = largerThan;
    return smallerThan;
}

function getLinkedListTail(linkedListHead) {
    let current = linkedListHead;
    while (current.next !== null) {
        current = current.next;
    }
    return current;
}

function cleanLinkedListPartition(linkedListHead, x) {
    let smallNodeValues = []; 
    let largeNodeValues = [];
    let current = linkedListHead;
    while (current !== null) {
        if (current.data < x) {
            smallNodeValues.push(current.data);
        }
        current = current.next;
    }
    let smallerThan = getLinkedList(smallNodeValues);
    let tail = getLinkedListTail(smallerThan);
    current = linkedListHead;
    while (current !== null) {
        if (current.data >= x) {
            largeNodeValues.push(current.data);
        }
        current = current.next;
    }
    let largerThan = getLinkedList(largeNodeValues);
    tail.next = largerThan;
    return smallerThan;
}


let linkedList = getLinkedList([1,4,19,3,8,16,4]);
let partition = cleanLinkedListPartition(linkedList, 7);
let current = partition;
while (current !== null) {
    console.log(current.data);
    current = current.next;
}

//let linkedList1 = getLinkedList([0,1]);
//console.log(linkedList1);
//
//let linkedList2 = getLinkedList([0]);
//console.log(linkedList2);
