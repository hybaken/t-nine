import { transformDictionary, getT9Words } from './dictionaryService'

describe('dictionaryService', () => {
    it('should transform dictionary', () => {
        transformDictionary();
        const result = getT9Words('43556');
        expect(result).toEqual(["gekko", "hello"]);
    });
})
