import { BoxGeometry, Group, MeshBasicMaterial, Vector3 } from 'three'
import THREE = require('three')
import { materials } from './materials'

export interface cylinderConfig {
  radiusTop?: number
  radiusBottom?: number
  height?: number
  radialSegments?: number
  heightSegments?: number
  openEnded?: boolean
  thetaStart?: number
  thetaLength?: number
}
export type primitives = { cylinder: cylinderConfig }

export const primitives = (config: cylinderConfig) => {
  const cylinder = new THREE.CylinderGeometry(
    config?.radiusTop,
    config?.radiusBottom,
    config?.height,
    config?.radialSegments,
    config?.heightSegments,
    config?.openEnded,
    config?.thetaStart,
    config?.thetaLength,
  )
  return {
    cylinder: cylinder,
  }
}

export const createCube = (pos: Vector3, length?: number): Group => {
  const cubeLength = length || 1
  const geometry = new BoxGeometry(1, cubeLength, 1)
  const material = new MeshBasicMaterial({ color: 0x00ff00 })
  const cube = new THREE.Mesh(geometry, material)
  cube.position.set(0, cubeLength / 2, 0) //Move the center of gravity

  const pivot = new THREE.Group()
  pivot.add(cube)
  pivot.position.set(pos.x, pos.y, pos.z)
  const axisHelper = new THREE.AxesHelper(16)
  pivot.add(axisHelper)

  return pivot
}

export const createCylinder = (pos: Vector3, length?: number, radius?:number ): THREE.Group => {
  const startRadius = 2 || radius
  const endRadius = 2 || radius
  const cylLength = length || 1
  const cylinderSegments = 36

  const geometry = new THREE.CylinderGeometry(
    startRadius,
    endRadius,
    cylLength,
    cylinderSegments,
  )

  const cylinder = new THREE.Mesh(geometry, materials().basicMaterial)
  cylinder.position.set(0, cylLength / 2, 0)

  const pivot = new THREE.Group()
  pivot.add(cylinder)
  pivot.position.set(pos.x, pos.y, pos.z)
  const axisHelper = new THREE.AxesHelper(16)
  pivot.add(axisHelper)

  return pivot
}

export const createArrowHelper = (): THREE.ArrowHelper => {
  //Ref: https://threejs.org/docs/#api/en/helpers/ArrowHelper
  const dir = new THREE.Vector3(1, 2, 0)
  //normalize the direction vector (convert to vector of length 1)
  dir.normalize()
  const origin = new THREE.Vector3(0, 0, 0)
  const length = 3
  const hex = 0xffff00

  return new THREE.ArrowHelper(dir, origin, length, hex)
}
