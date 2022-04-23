
export const createVertices = (size: number, segments: number) => {

    let indices: Array<number> = [];
    
    let vertices: Array<number> = [];
    let normals: Array<number> = [];
    let colors: Array<number> = [];

    const halfSize = size / 2;
    const segmentSize = size / segments;

    for (let i = 0; i < segments; i++) {
        const y = (i * segmentSize) - halfSize;

        for (let j = 0; j <= segments; j++) {
            const x = (j * segmentSize) - halfSize;
            vertices.push(x, - y, 0);
            normals.push(0, 0, 1);

            const r = (x / size) + 0.5;
            const g = (y / size) + 0.5;

            colors.push(r, g, 1);
        }

        indices.push(...indices = createIndices(i, segments));
    }

    return vertices;
}


export const createIndices = (i: number, segments: number): Array<number> => {
    let indices: Array<number> = [];
    // generate indices (data for element array buffer)
    for (let j = 0; j <= segments; j++) {
        for (let j = 0; j < segments; j++) {

            const a = i * (segments + 1) + (j + 1);
            const b = i * (segments + 1) + j;
            const c = (i + 1) * (segments + 1) + j;
            const d = (i + 1) * (segments + 1) + (j + 1);

            // generate two faces (triangles) per iteration

            indices.push(a, b, d); // face one
            indices.push(b, c, d); // face two

        }
        return indices;
    }
};

import jest from '@jest/globals'
describe('create', () => {
    it('should create a simple indexed mesh', () => {
        const size = 1;
        const segments = 1;
        const mesh = createVertices(size, segments);
        expect(mesh).toBeDefined();
    });

    it('mesh with size 1 and with only 1 segment should have 6 vertices', () => {
        const size = 1;
        const segments = 1;
        const mesh = createVertices(size, segments);
        expect(mesh.length).toBe(6);
    });

    it('mesh with size 1 and with only 2 segment should have 6+4+6+4 (18) vertices', () => {
        const size = 1;
        const segments = 2;
        const mesh = createVertices(size, segments);
        expect(mesh.length).toBe(18);
    });

    it('mesh with size 1 and with only 0 segment should result in empty vertices list', () => {
        const size = 1;
        const segments = 0;
        const mesh = createVertices(size, segments);
        expect(mesh.length).toBe(0);
    });
})