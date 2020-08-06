'use strict'

import jsonDictionary from '../../words_dictionary.json';
import { T9_MAP_REVERSE } from './tnineMap';

let tNineWords = {};

export const transformDictionary = () => {
    for (const [key, value] of Object.entries(jsonDictionary)) {
        let transformed = '';
        for (let i = 0; i < key.length; i++) {
            transformed = transformed.concat(T9_MAP_REVERSE[key[i]]);
        }
        if (tNineWords[transformed]) {
            tNineWords[transformed].push(key);
        } else {
            tNineWords[transformed] = [key];
        }
    }
}

export const getT9Words = (number) => {
    return tNineWords[number] ? tNineWords[number] : [];
}