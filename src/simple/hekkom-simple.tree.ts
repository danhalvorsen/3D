import { Group, Object3D, Vector3 } from 'three'
import THREE = require('three')
import { deg2rad, rotateZ } from '../common/operations'
import {
  createArrowHelper,
  createCube,
  createCylinder,
} from '../common/primitives'

export const helloSimpleThree = (scene: THREE.Scene) => {
  const cylGroup1 = createCube(new Vector3(0, 0, 0), 2)
  const cylGroup2 = createCube(new Vector3(0, 2.0, 0), 4)

  scene.add(cylGroup1)
  scene.add(cylGroup2)

  const leftBranch = createCube(new Vector3(0, 4, 0), 8)
  rotateZ(deg2rad(45), leftBranch)

  const leftBranch2 = createCube(new Vector3(-1, 8, 0), 4)
  rotateZ(Math.PI / deg2rad(60), leftBranch2)

  const rigthBranch = createCube(new Vector3(0, 4, 0), 4)
  rotateZ(deg2rad(-45), rigthBranch)

  scene.add(leftBranch)
  scene.add(leftBranch2)
  scene.add(rigthBranch)
}
