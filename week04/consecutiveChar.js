//1446. Consecutive Characters
// Example 1:

// Input: s = "leetcode"
// Output: 2
// Explanation: The substring "ee" is of length 2 with the character 'e' only.
// Example 2:

// Input: s = "abbcccddddeeeeedcba"
// Output: 5
// Explanation: The substring "eeeee" is of length 5 with the character 'e' only.
 

const maxPower = function(s) {
    let maxcount = 1
    let count = 1
    let char = s[0]

    for(let i = 1;i<s.length;i++){
        
        if(s[i] === char){
            count++
        }
        else{
            char = s[i]
            count = 1
        }

        if(count > maxcount) maxcount = count

    }
    
    return maxcount
};

const s = "abbcccddddeeeeedcba"
console.log(maxPower(s))