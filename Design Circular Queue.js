/**
 * @param {number} k
 */
var MyCircularQueue = function(k) {
    this.queue = new Array(k);
    this.size = k;
    // head = 0, tail = -1: This initialization typically means that the first place where an element could be added is the 0th index in the array (the head of the queue), and there's no element in the queue yet (hence tail = -1). This means that the queue is empty at the beginning. When you add the first element, tail will be incremented to 0, so both head and tail point to the 0th index.
    this.head = 0;
    this.tail = -1;
    // head = -1, tail = -1: This initialization typically means that there's no valid position in the queue yet (since -1 isn't a valid index in the array). This is another way to represent an empty queue. When you add the first element to the queue, you increment both head and tail to 0, so the first element goes to the 0th index in the array.
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function(value) {
    if(this.isFull()){
        return false;
    } else {
        // This operation is what makes the queue circular. When the tail pointer reaches the end of the queue, if we enqueue, add 1 to the tail index, it would normally go outside of the bounds of the queue array, but with modulus operation, `(this.tail + 1) % this.size` would wrap around to 0, which is the start of the queue
        this.tail = (this.tail + 1) % this.size;
        this.queue[this.tail] = value;
        return true;
    }
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function() {
    if(this.isEmpty()){
        return false;
    }
    if(this.head === this.tail){
        this.head = 0;
        this.tail = -1;
    } else {
        this.head = (this.head + 1) % this.size
    }
    return true;
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function() {
    return this.isEmpty() ? -1 : this.queue[this.head]
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function() {
    return this.isEmpty() ? -1 : this.queue[this.tail]
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function() {
    return this.tail === -1;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function() {
    // checking if the next position after tail is head, if tail is -1, which means the queue is empty, so (this.tail + 1) % this.size would be 0, which equals head. So we need to make sure the queue is not empty.
    return !this.isEmpty() && (this.tail + 1) % this.size === this.head;
};

/** 
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */