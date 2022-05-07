import { Material } from "./Material";
import { BufferIndexedMesh } from "./BufferIndexedMesh";
import * as THREE from "three";

export class BufferIndexedMeshThreeJS extends BufferIndexedMesh {

    readonly geometry?: THREE.BufferGeometry;
    readonly scene?: THREE.Scene;
    mesh: THREE.Mesh;

    constructor(scene: THREE.Scene, size: number, segments: number) {
        super(size, segments);
        this.scene = scene;
        this.geometry = new THREE.BufferGeometry();
        this.geometry.setIndex(this.geometryType.indices);
        this.geometry.setAttribute('position', new THREE.Float32BufferAttribute(this.geometryType.vertices, 3));
        this.geometry.setAttribute('normal', new THREE.Float32BufferAttribute(this.geometryType.normals, 3));
        this.geometry.setAttribute('color', new THREE.Float32BufferAttribute(this.geometryType.colors, 3));
        this.mesh = new THREE.Mesh(this.geometry, new Material().redWireFrame);
        this.scene?.add(this.mesh);
    }

}
