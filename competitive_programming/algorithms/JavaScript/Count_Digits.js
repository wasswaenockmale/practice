function countDigits(str){
    const digits = [0,1,2,3,4,5,6,7,8,9];

    let count = 0;
    for(const char of str.split("")){
        if(digits.includes(Number(char))){
            count++;
        }
    }
    return count;
}

function count(str){
    const digits = [0,1,2,3,4,5,6,7,8,9];
    
    let obj = {};
    for(const char of str.split("")){
        if(digits.includes(Number(char))){
            if(obj.hasOwnProperty(char)){
                obj[char] = obj[char] + 1;
            }else{
                obj[char] = 1
            }
        }
    }
    return obj;
}

console.log(count('77101'));