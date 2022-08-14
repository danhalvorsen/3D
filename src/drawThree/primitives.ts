import THREE = require('three')

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
