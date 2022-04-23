import { createIndices } from "./createIndices";

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