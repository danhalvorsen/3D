import * as THREE from 'three';


export class Material {
    public greenWireFrame: THREE.MeshBasicMaterial = new THREE.MeshBasicMaterial({
        color: 0x00ff00,
        wireframe: true,
    });
    
    public redWireFrame : THREE.MeshBasicMaterial = new THREE.MeshBasicMaterial({
        color: 0xff0000,
        wireframe: true,
    });

    public meshPhongmaterial : THREE.MeshPhongMaterial = new THREE.MeshPhongMaterial({
        side: THREE.DoubleSide,
        vertexColors: true
    });
}