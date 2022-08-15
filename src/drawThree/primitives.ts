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

export const createCube = () => {
  const geometry = new THREE.BoxGeometry(1, 1, 1)
  const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
  const cube = new THREE.Mesh(geometry, material)
  return cube
}

export const createCylinder = (): THREE.Mesh => {
  const startRadius = 5
  const endRadius = 5
  const length = 1
  const cylinderSegments = 36

  const geometry = new THREE.CylinderGeometry(
    startRadius,
    endRadius,
    length,
    cylinderSegments,
  )
  const mesh1 = new THREE.Mesh(geometry, materials().basicMaterial)
  return mesh1
}
