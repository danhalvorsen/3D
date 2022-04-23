
export const create = (size: number, segments: number) => {
   
    let indices: Array<number> = [];

    const halfSize = size / 2;
    const segmentSize = size / segments;

    for (let i = 0; i < segments; i++) {

    }
};

import jest from '@jest/globals'
describe('create', () => {
    it('should create a simple indexed mesh', () => {
        const size = 1;
        const segments = 1;
        const mesh = create(size, segments);
        expect(mesh).toBeDefined(); 
    });
});
