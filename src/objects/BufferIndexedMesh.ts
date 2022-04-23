import { createVertices, GeometryType } from "./createVertices";

export class BufferIndexedMesh {

    protected geometryType: GeometryType = undefined;
    constructor(size: number, segments: number) {
        this.geometryType = createVertices(size, segments);
    }
};
