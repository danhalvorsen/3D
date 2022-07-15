import jest from '@jest/globals'

import { createVertices } from '../objects/createVertices';

describe('create vertices', () => {
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
        expect(mesh.vertices.length).toBe(12);
    });

    it('mesh with size 1 and with only 2 segment should have 6+4+6+4 (18) vertices', () => {
        const size = 1;
        const segments = 2;
        const mesh = createVertices(size, segments);
        expect(mesh.vertices.length).toBe(27);
    });

    it('mesh with size 1 and with only 0 segment should result in empty vertices list', () => {
        const size = 1;
        const segments = 0;
        const geometryType = createVertices(size, segments);
        expect(geometryType.vertices.length).toBe(3);
    });
})