const selectionSort = require('../../src/Sort/selectionSort');
const bubbleSort = require('../../src/Sort/bubbleSort');

test('selectionSort', () => {
    expect(selectionSort([2, 7, 11, 15, 21, 34, 0])).toEqual([0, 2, 7, 11, 15, 21, 34]);
    expect(selectionSort([2, 2, 1, 3, 7, 4, 3])).toEqual([1, 2, 2, 3, 3, 4, 7]);
    expect(selectionSort([3, 2, 4])).toEqual([2, 3, 4]);
});

test('bubbleSort', () => {
    expect(bubbleSort([2, 7, 11, 15, 21, 34, 0])).toEqual([0, 2, 7, 11, 15, 21, 34]);
    expect(bubbleSort([2, 2, 1, 3, 7, 4, 3])).toEqual([1, 2, 2, 3, 3, 4, 7]);
    expect(bubbleSort([3, 2, 4])).toEqual([2, 3, 4]);
});