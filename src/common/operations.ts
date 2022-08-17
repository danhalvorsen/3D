import THREE = require('three')

export const rotateZ = (angle: number, group: THREE.Group) => {
  const quaternion = new THREE.Quaternion()
  quaternion.setFromAxisAngle(new THREE.Vector3(0, 0, 1), angle)
  group.applyQuaternion(quaternion)
}

export const deg2rad = (deg: number) => {
  return deg * Math.PI / 180;
}
