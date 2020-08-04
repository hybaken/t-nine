'use strict'

const tnineMap = {
    '1': [''],
    '2': ['a', 'b', 'c'],
    '3': ['d', 'e', 'f'],
    '4': ['g', 'h', 'i'],
    '5': ['j', 'k', 'l'],
    '6': ['m', 'n', 'o'],
    '7': ['p', 'q', 'r', 's'],
    '8': ['t', 'u', 'v'],
    '9': ['w', 'x', 'y', 'z'],
    '0': [' '],
};

const convert = (toConvert, state) => {
    if (toConvert && toConvert.length > 0) {
        if (!state) {
            return convert(toConvert.slice(1), tnineMap[toConvert[0]]);
        } else {
            const newState = [];
            for (let s of state) {
                const newChars = tnineMap[toConvert[0]];
                for (let newChar of newChars) {
                    newState.push(s.concat(newChar));
                }
            }
            return convert(toConvert.slice(1), newState);
        }
    }
    return state;
}

export default convert;