import { Group, Object3D, Vector3 } from 'three'
import THREE = require('three')
import { rotateZ } from '../common/operations'
import {
  createArrowHelper,
  createCube,
  createCylinder,
} from '../common/primitives'

export const helloSceneGraph = (scene: THREE.Scene) => {
  const rBranch = [
    createCube(new Vector3(0, 4.0, 0)),
    createCube(new Vector3(1, 1.5, 0)),
    createCube(new Vector3(2, 2.5, 0)),
    createCube(new Vector3(3, 3.5, 0)),
    createCube(new Vector3(4, 4.5, 0)),
  ]

  const lBranch = [
    createCube(new Vector3(0, 4.0, 0)),
    createCube(new Vector3(-1, 1.5, 0)),
    createCube(new Vector3(-2, 2.5, 0)),
    createCube(new Vector3(-3, 3.5, 0)),
    createCube(new Vector3(-4, 4.5, 0)),
  ]

  const cylGroup1 = createCylinder(new Vector3(0, 0, 0), 2)
  const cylGroup2 = createCylinder(new Vector3(0, 2, 0), 1)

  scene.add(rBranch[0])
  rBranch[0].add(rBranch[1])
  rBranch[0].add(rBranch[2])
  rBranch[0].add(rBranch[3])
  rBranch[0].add(rBranch[4])

  scene.add(lBranch[0])
  lBranch[0].add(lBranch[1])
  lBranch[0].add(lBranch[2])
  lBranch[0].add(lBranch[3])
  lBranch[0].add(lBranch[4])

  scene.add(cylGroup1)
  scene.add(cylGroup2)

  // rBranch.forEach((i) => {
  //   rotateZ(-Math.PI / 8, i)
  // })

  // lBranch.forEach((i) => {
  //   rotateZ(Math.PI / 8, i)
  // })

  console.log('returning to main function')
}
