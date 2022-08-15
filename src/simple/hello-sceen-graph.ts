import { Vector3 } from 'three'
import THREE = require('three')
import { rotateZ } from '../common/operations'
import {
  createArrowHelper,
  createCube,
  createCylinder,
} from '../common/primitives'

export const helloSceenGraph = (scene: THREE.Scene) => {
  const cubeGroup = createCube(new Vector3(0, 4, 0))
  const cylGroup1 = createCylinder(new Vector3(0, 0, 0), 2)
  const cylGroup2 = createCylinder(new Vector3(0, 2, 0), 1)

  scene.add(cubeGroup)
  scene.add(cylGroup1)
  scene.add(cylGroup2)

  rotateZ(-Math.PI / 8, cubeGroup)

  console.log('returning to main function')
}
