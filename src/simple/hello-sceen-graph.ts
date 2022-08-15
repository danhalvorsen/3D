import THREE = require('three')
import { materials } from '../drawThree/materials'
import { createCube, createCylinder } from '../drawThree/primitives'

export const helloSceenGraph = (scene: THREE.Scene) => {
  const cube = createCube()

  const pivot = new THREE.Group()
  pivot.add(new THREE.AxesHelper(10))
  pivot.add(cube)

  pivot.position.set(0, 4, 0)
  cube.position.set(0, 0.5, 0)

  const mesh1 = createCylinder()
  const mesh2 = createCylinder()

  mesh1.position.set(0, 2, 0)
  mesh2.position.set(0, 0, 0)

  scene.add(pivot)
  // scene.add(cube)
  scene.add(mesh1)
  scene.add(mesh2)

  console.log('returning to main function')
}
