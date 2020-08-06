'use strict'

import { getT9Words } from './dictionaryService';
import { T9_MAP } from './tnineMap';

const convert = (toConvert, dictionary) => {
    if (dictionary === true) {
        console.log('dictionary');
        return getT9Words(toConvert);
    } else {
        console.log('generating');
        return generateT9(toConvert);
    }
}

const generateT9 = (toConvert, state) => {
    if (toConvert && toConvert.length > 0) {
        if (!state) {
            return generateT9(toConvert.slice(1), T9_MAP[toConvert[0]]);
        } else {
            const newState = [];
            for (let s of state) {
                const newChars = T9_MAP[toConvert[0]];
                for (let newChar of newChars) {
                    newState.push(s.concat(newChar));
                }
            }
            return generateT9(toConvert.slice(1), newState);
        }
    }
    return state;
}

export default convert;