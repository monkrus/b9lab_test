/**
 * Real test Q1
 *
 * The sum of an array is the sum of its individual elements. For example, if
 * an array is numbers = [1, 2, 3, 4], the sum of the array is 1+2+3+4=10
 *
 * --------------------------------------
 * Function Description
 * --------------------------------------
 * Complete the function summation in the editor below. The function
 * must return the integer sum of the numbers array
 *
 * summation has the following parameter(s)
 *
 * numbers[numbers[0],...numbers[n-1]]: an array of integers

 Contains
 - 1<= n <= 10(4)
 - 1<= numbers[i]<=10(4)

 * --------------------------------------
 *  Input Format for Custom Testing
 * --------------------------------------
 *
 * Input from stdin will be processed as follows and passed to the function.
 *
 * The first line contains as integer "n", the size of the array numbers.
 *
 * --------------------------------------
 * Sample Case 0
 * --------------------------------------
 *  Sample Input 0
 *
 * 5
 * 1
 * 2
 * 3
 * 4
 * 5
 *
 *  Sample Output 0
 * --------------------------------------
 * 15
 *
 * Explanation 0
 *
 * 1+2+3+4+5=15
 *
 *
 */
//Option 1 (works!!)


function getSum(numbers) {
    var sum = 0;
    for (var i in numbers) {
        sum += numbers[i];
    }
    return sum;
 }

 numbers = [];
 total_number = 0;

 process.stdin.resume();
 process.stdin.setEncoding("utf-8");

 process.stdin.on("data", function (input) {
    if(total_number === 0) {
        total_number = parseInt(input);
        return;
    }

    numbers.push(parseInt(input));

    if (numbers.length === total_number) {
        var sum = getSum(numbers);
        console.log(sum);
        process.stdin.destroy();
    }
 });
