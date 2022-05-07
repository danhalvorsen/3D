import { createVertices, GeometryType } from './../objects/createVertices';
describe('create indices', () => {
    it('should have created indices for given vertices', () => {
        const geometryType = CreateBasicMesh();
        expect(geometryType).toBeDefined()
    });

    it('should have created indices for given vertices', () => {
        const geometryType = CreateBasicMesh();
        expect(geometryType.indices.length).toBeGreaterThan(0)
    });

});

type SimpleMeshArguments = {
    size: number,
    segments: number
};

function CreateBasicMesh(args: SimpleMeshArguments = {size: 1, segments: 1} ) : GeometryType {
    const size = args.size;
    const segments = args.segments;
    const geometryType = createVertices(size, segments);
    return geometryType;
}
