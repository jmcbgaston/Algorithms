function efficientJanitor(weight) {

    // sort the weights
    weight = weight.sort((a, b) => (a - b));

    // create pointers for left and right
    let i = 0, j = weight.length - 1;

    // set up base count
    let count = 0;


    while (i <= j) {

        // if pair is less than 3 then i++, j--, count ++
        if (weight[i] + weight[j] <= 3) {
            count++;
            i++;
            j--;
        // if pair is greater than 3 then right is its own ele therefore only j--, count++
        } else if (weight[i] + weight[j] > 3) {
            j--;
            count++;
        }
    }

    //return at the end
    return count;
}

const weight = [1.99, 1.01, 2.5, 1.5, 1.01]

// Maximum bag size is 3.0 find the minimum number trips required by the janitor to dump the garbage.

// Output for the example :
// [1.01 + 1.99], [1.01 + 1.5], [2.5] so min steps is 3.