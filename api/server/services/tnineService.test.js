import convert from './tnineService';

describe('tnineService', () => {
    it('should convert to T9 - undefined', () => {
        const result = convert();
        expect(result).toBe(undefined)
    });
    it('should convert to T9 - single number', () => {
        const result = convert('2');
        expect(result).toEqual(['a', 'b', 'c'])
    });
    it('should convert to T9 - multiple numbers', () => {
        const result = convert('23');
        expect(result).toEqual(["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"])
    });
    it('should convert to T9 - dictionary', () => {
        const result = convert('23', true);
        expect(result).toEqual([])
    });
})
