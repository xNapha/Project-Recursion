//Iteration write a fib function which takes a number and returns an array containing that many numbers from the fibonacci sequence.
function fibLoop(n){
    let a = 0;
    let b = 1;
    let arr = [];
    //as i approaches n let c = a+b a = b b = c 
    for (let i = 0; i< n; i++){
        arr.push(a);
        let c =  a + b;
        a = b;
        b = c;
    };
    return arr;
}


//write another method fibsRec which solves the same problem recursively.
const test = () =>{
    let arr = [];
    //fib rec sequence
    const fibsRec = (n) => {
        return (n<=1) ? n : fibsRec(n-1) + fibsRec(n-2);
    };
    //as i approaches n push fibRec(i) into arr
    //then as i == n return arr
    const pushArr = (n) =>{
        for (let i = 0; i < n; i++){
            arr.push(fibsRec(i))
        };
        return arr
    };
    return {pushArr}
}



//Build a function mergeSort that takes in an array and returns a sorted array, using a recursive merge sort methodology.
let unsorted = [4,2,6,8,124,6,1,3,0,8,5, 123,9867]
console.log(unsorted.sort((a,b)=>{return a - b}))
const mergeSort = (arr) =>{
    // mid point of the array
    const half = arr.length/2;
    //base case, terminates the call
    if(arr.length < 2){
        return arr;
    };
    //left side of the array
    const left = arr.splice(0,half);
    return merge(mergeSort(left), mergeSort(arr));


    function merge(left,right){
        let temp = [];
        // stop until either left or right are empty
        while(left.length && right.length){
            if(left[0] < right[0]){
                temp.push(left.shift());
            } else {
                temp.push(right.shift());
            };
        };
        //concat all the left over pieces in the array
        return [...temp, ...left, ...right];
    };
};

console.log(mergeSort(unsorted));
