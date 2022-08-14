import * as THREE from 'three'
import { NumberKeyframeTrack, Vector3 } from 'three'
import { materials } from './materials'
import { midpoint } from './midpoint'

export type Pos = { vec: Vector3 }
export type PosPair = { start: Pos; end: Pos }
export type RadiusPair = { startRadius: number; endRadius: number }
export type BranchData = {
  pos: PosPair
  radiusPair: RadiusPair
  depth: number
  angle: number
  length: number
}

export const branch = (branchData: BranchData): THREE.Mesh => {
  const length = branchData.pos.start.vec.distanceTo(branchData.pos.end.vec)

  const geometry = new THREE.CylinderGeometry(
    branchData.radiusPair.startRadius,
    branchData.radiusPair.endRadius,
    length,
    8,
  )

  return new THREE.Mesh(geometry, materials().basicMaterial)
}

export const threeGenerator = (scene: THREE.Scene, branchData: BranchData) => {
  const func = (branchData: BranchData, mother?: THREE.Mesh) => {
    if (branchData.depth < 4) return

    const mesh = branch(branchData)
    scene.add(mesh)

    mesh.add(new THREE.AxesHelper(15))

    if (mother === undefined) {
      // var box = new THREE.Box3().setFromObject(mesh);
      // box.getCenter(mesh.position); // this re-sets the mesh position
      // mesh.position.multiplyScalar(-1);

      const pivot = new THREE.Group()
      pivot.position.set(0, 0, 0)
      scene.add(pivot)
      pivot.add(mesh)

      const pos = mesh.position

      console.log(`adding root@[${pos.x},${pos.y},${pos.z}]`)
    } else {
      const pos = new THREE.Vector3(
        branchData.pos.start.vec.x,
        branchData.pos.start.vec.y,
        branchData.pos.start.vec.z,
      )
      mesh.position.set(pos.x, pos.y, pos.z)
      rotate(-Math.PI / 4)

      console.log(
        `adding a new branch to the tree. pos:[${pos.x},${pos.y},${pos.z}]`,
      )
    }

    const newData = branchData
    const mp = (newData.pos.start.vec = midpoint(
      newData.pos.start.vec,
      newData.pos.end.vec,
    ))
    // newData.pos.end.vec = new THREE.Vector3(3, 3, 3)
    newData.length = branchData.length / 2
    newData.angle = branchData.angle
    newData.depth -= 1.0

    func(newData, mesh)

    function rotate(angle: number) {
      const quaternion = new THREE.Quaternion()
      quaternion.setFromAxisAngle(new THREE.Vector3(0, 0, 1), angle)
      mesh.applyQuaternion(quaternion)
    }
  }

  func(branchData, undefined)
}
