import { createIndices } from "./createIndices";
import { createVertices, GeometryType } from "./createVertices";

export class BufferIndexedMesh {

    protected geometryType: GeometryType;
    constructor(size: number, segments: number) {
        this.geometryType = createVertices(size, segments);
        
        
    }
};
