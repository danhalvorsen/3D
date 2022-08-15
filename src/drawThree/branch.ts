import * as THREE from 'three'
import { NumberKeyframeTrack, Vector3 } from 'three'
import { PosPair as ToFrom, RadiusPair } from '../common/types'
import { midpoint } from './midpoint'
import { materials } from '../common/materials'

export type BranchData = {
  pos: ToFrom
  radiusPair: RadiusPair
  depth: number
  angle: number
  length: number
}

export const branch = (
  branchData: BranchData,
  scene: THREE.Scene,
): THREE.Group => {
  const length = branchData.pos.start.vec.distanceTo(branchData.pos.end.vec)

  const geometry = new THREE.CylinderGeometry(
    branchData.radiusPair.startRadius,
    branchData.radiusPair.endRadius,
    length,
    36,
  )

  const mesh = new THREE.Mesh(geometry, materials().basicMaterial)
  mesh.add(new THREE.AxesHelper(15))
  const group = new THREE.Group()
  group.add(new THREE.AxesHelper(15))
  group.add(mesh)

  mesh.position.set(0.5, 0.5, 0)
  group.position.set(-0.5, -0.5, 0)

  scene.add(group)
  return group
}

export const threeGenerator = (scene: THREE.Scene, branchData: BranchData) => {
  const func = (branchData: BranchData, mother?: THREE.Group) => {
    if (branchData.depth < 4) return

    const meshGroup = branch(branchData, scene)

    if (mother === undefined) {
      const pos = meshGroup.position

      console.log(
        `adding root@[${pos.x},${pos.y},${pos.z}] length:${branchData.length} `,
      )
    } else {
      const pos = new THREE.Vector3(
        branchData.pos.start.vec.x,
        branchData.pos.start.vec.y,
        branchData.pos.start.vec.z,
      )
      meshGroup.position.set(pos.x, pos.y, pos.z)

      console.log(
        `adding a new branch to the tree. pos:[${pos.x},${pos.y},${pos.z}] length:${branchData.length} `,
      )
    }

    const newData = branchData
    const mp = (newData.pos.start.vec = midpoint(
      newData.pos.start.vec,
      newData.pos.end.vec,
    ))

    newData.length = branchData.length / 2
    newData.angle = branchData.angle
    newData.depth -= 1.0

    func(newData, meshGroup)
  }

  func(branchData, undefined)
}
