function largestSwap(num) {
    let [a, b] = num.toString();
    [a, b] = [b, a];
    let new_nume = a + b;
    console.log(parseInt(new_nume) >= num);
}


largestSwap(14) //➞ false

largestSwap(53) //➞ true

largestSwap(99) //➞ true