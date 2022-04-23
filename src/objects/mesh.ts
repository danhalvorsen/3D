import * as THREE from 'three'
import { PlaneGeometry } from 'three';

export class Mesh {

    private _scene: THREE.Scene;
    private _mesh: THREE.Mesh;
    /**
     *
     */
    constructor(scene: THREE.Scene, translation: THREE.Vector3, material: THREE.MeshBasicMaterial) {
        this._scene = scene;

        const axesHelper = new THREE.AxesHelper(10);
        var colors = axesHelper.geometry.attributes.color;
        colors.setXYZ(0, 1, 0, 0);
        colors.setXYZ(1, 1, 0, 0);
        colors.setXYZ(2, 0, 0, 1);
        colors.setXYZ(3, 0, 0, 1);
        colors.setXYZ(4, 0, 1, 0);
        colors.setXYZ(5, 0, 1, 0);
      
        let mesh = new THREE.Mesh(new PlaneGeometry(200, 100, 10, 10), material);
        mesh.position.x = translation.x;
        mesh.position.y = translation.y;
        mesh.position.y = translation.z;
        mesh.add(axesHelper);
        this._scene.add(mesh);
        this._mesh = mesh;


    }
}