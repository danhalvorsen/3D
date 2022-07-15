import jest from '@jest/globals'
import THREE from "three";
import { Square } from "../objects/SquareMesh";

describe('square', () => {
        it('should have created indices for given vertices', () => {
            const square = Square(10, 10, 100,100);
            expect(square).toBeDefined();
            expect(square.vertices.length).toBe(8);
            
        });
});