import * as THREE from 'three'

export const midpoint = (a: THREE.Vector3, b: THREE.Vector3): THREE.Vector3 => {
  return new THREE.Vector3((a.x + b.x) / 2, (a.y + b.y) / 2, (a.z + b.z) / 2)
}
