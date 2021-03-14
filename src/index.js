module.exports = function toReadable (number) {
    if (number == 0) {
        return 'zero';
    }
    let arr = number.toString().split('');
    let str = '';
    const numbers = {
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: "fifty",
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety'
    };
    if (arr.length <= 2) {
        for (let key in numbers) {
            if (number == key) {
                return numbers[key];
            }
        }
    } 
    
    if (arr.length == 2 && arr[0] != 1) {
        for (let key in numbers) {
            if (arr[0] * 10 == key) {
                str += numbers[key];
            }
        }
        for (let key in numbers) {
            if (arr[1] == key) {
                str += ` ${numbers[key]}`;
            }
        }
        return str;
    }

    if (arr.length == 3) {
        for (let key in numbers) {
            if (arr[0] == key) {
                str += `${numbers[key]} hundred`;
            }
        }
        if (arr[1] == 0) {
            if (arr[2] == 0) {
                return str;
            }
            for (let key in numbers) {
                if (arr[2] == key) {
                    str += ` ${numbers[key]}`;
                    return str;
                }
            }
        }
        for (let key in numbers) {
            if (Number(arr[1] + arr[2]) == key) {
                str += ` ${numbers[key]}`;
                return str;
            }
        }
        for (let key in numbers) {
            if (arr[1] * 10 == key) {
                str += ` ${numbers[key]}`;
            }
        }
        for (let key in numbers) {
            if (arr[2] == key) {
                str += ` ${numbers[key]}`;
            }
        }
        return str;
    }  
};
