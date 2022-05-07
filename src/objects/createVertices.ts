import { createIndices } from "./createIndices";

export type GeometryType = {
    indices : Array<number>
    vertices : Array<number>
    normals: Array<number>
    colors: Array<number>
}

export const createVertices = (size: number, segments: number) : GeometryType  => {

    let indices: Array<number> = [];
    let vertices: Array<number> = [];
    let normals: Array<number> = [];
    let colors: Array<number> = [];

    const halfSize = size / 2;
    const segmentSize = size / segments;

    for (let i = 0; i <= segments; i++) {    
        const y = (i * segmentSize) - halfSize;

        for (let j = 0; j <= segments; j++) {
            const x = (j * segmentSize) - halfSize;
            vertices.push(x, - y, 0);
            normals.push(0, 0, 1);

            const r = (x / size) + 0.5;
            const g = (y / size) + 0.5;

            colors.push(r, g, 1);
        }}


        for ( let i = 0; i < segments; i ++ ) {

            for ( let j = 0; j < segments; j ++ ) {

                const a = i * ( segments + 1 ) + ( j + 1 );
                const b = i * ( segments + 1 ) + j;
                const c = ( i + 1 ) * ( segments + 1 ) + j;
                const d = ( i + 1 ) * ( segments + 1 ) + ( j + 1 );

                // generate two faces (triangles) per iteration

                indices.push( a, b, d ); // face one
                indices.push( b, c, d ); // face two

            }

        }
        //createIndices(i, segments, indices);
        let geometry : GeometryType = {"vertices": vertices, "indices": indices, "normals": normals, "colors": colors}; 
        return geometry;
    
    }

