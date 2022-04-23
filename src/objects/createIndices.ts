
/**
 * @Summary 
 * @param i 
 * @param segments 
 * @returns 
 */
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