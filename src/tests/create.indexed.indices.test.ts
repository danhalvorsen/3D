
export const create = (size: number, segments: number) => {
   
    let vertices: Array<number> = [];

    const halfSize = size / 2;
    const segmentSize = size / segments;

    for (let i = 0; i < segments; i++) {
        const y = ( i * segmentSize ) - halfSize;

        for ( let j = 0; j <= segments; j ++ ) {
            const x = ( j * segmentSize ) - halfSize;
            vertices.push( x, - y, 0 );
        }
    }

    return vertices;
};

import jest from '@jest/globals'
describe('create', () => {
    it('should create a simple indexed mesh', () => {
        const size = 1;
        const segments = 1;
        const mesh = create(size, segments);
        expect(mesh).toBeDefined(); 
    });

    it('mesh with size 1 and with only 1 segment should have 6 vertices', () => {
        const size = 1;
        const segments = 1;
        const mesh = create(size, segments); 
        expect(mesh.length).toBe(6);
    });

    it('mesh with size 1 and with only 2 segment should have 6*4 (24) vertices', () => {
        const size = 1;
        const segments = 2;
        const mesh = create(size, segments); 
        expect(mesh.length).toBe(24);
    });
})