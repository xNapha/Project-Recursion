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
let unsorted = [4,2,6,8]
const sort = () => {
    let sorted = [];
    /*
    if n elements < 2
        return
    else
        split left half of array
        split right half of array
        sort and merge halves
    */
    const mergeSort = (x) =>{
        if(x.length < 2){
            return
        } else{
            leftSort(x)
            rightSort(x)
            merge()
        }
    }
}

let a = [1]
let b = [3]
function testMerge(x,y){
    let temp = []
    let z = 0;
    if(x.length >= y.length){
        z = x.length
    }else {
        z = y.length
    }
    for(let i = 0; i <= z; i++){
        return "hi"
    }
    
}
console.log(testMerge(a,b))