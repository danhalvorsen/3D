import { createIndices } from "./createIndices";
import { createVertices, GeometryType } from "./createVertices";

export class BufferIndexedMesh {

    protected geometryType: GeometryType;
    protected size : number;
    protected segments: number;

    constructor(size: number, segments: number) {
        this.size = size;
        this.segments = segments;
        this.geometryType = this.create(this.size, this.segments);
    }

    protected create(size: number, segments: number) : GeometryType {
        this.geometryType = createVertices(size, segments);
        return this.geometryType;    
    }
};
