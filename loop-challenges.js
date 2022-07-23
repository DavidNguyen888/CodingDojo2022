// 1. Print odds 1-20
// Using a loop, write code that will console.log all of the ODD values from 1 up to 20.

for(var i = 1; i<20; i+=2) {
    console.log(i);
}



// 2. Decreasing Multiples of 3
// Using a loop, write code that will console.log all of the alues that are evenly divisible by 3 from 100 down to 0.

for(var i=100; i>-1; i--) {
    if(i % 3 == 0) {
        console.log(i);
    }
}



// 3. Print the sequence
// Using a loop, write code that will console.log the values in this sequence (4, 2.5, 1, -0.5, -2, -3.5)

for(var i=4; i>-4; i-=1.5) {
    console.log(i);
}
// This is a pattern and it goes down by 1.5 each time, hence i-=1.5.



// 4. Sigma (or sum)
// write code that will add all of the values from 1-100 onto some variable (sum) and at the end of the console.log, the result is (sum).
// We should see 5050 at the end.

var sum = 0
for(var i=1; i<101; i++) {
    sum += i;
}
console.log(sum);



// 5. Factorial
// write code that will multiply all the values from 1-12 onto some variable (product) and at the end of the console.log, the result is (product)
// We should get back 479001600 at the end.

var product = 1
for(var i=1; i<13; i++) {
    product *=i;
}
console.log(product);