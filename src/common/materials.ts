import * as THREE from 'three'

export const materials = () =>  {
    const basicMaterial = new THREE.MeshBasicMaterial({
        color: 0x00ff00,
        wireframe: true,
    })

    return {
        basicMaterial
    }
}

