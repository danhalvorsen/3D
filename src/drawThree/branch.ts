import { NumberKeyframeTrack, Vector3 } from 'three'
import THREE = require('three')
import { materials } from './materials'

export type Pos = { pos: Vector3 }
export type PosPair = { start: Pos; end: Pos }
export type RadiusPair = { startRadius: number; endRadius: number }
export type BranchData = { pos: PosPair; radiusPair: RadiusPair; depth: number; angle: number }

export const branch = (branchData: BranchData): THREE.Mesh => {
    const length = branchData.pos.start.pos.distanceTo(branchData.pos.end.pos)
    const geometry = new THREE.CylinderGeometry(
        branchData.radiusPair.startRadius,
        branchData.radiusPair.endRadius,
        2,
        32
    )
    const newBranchMesh = new THREE.Mesh(geometry, materials().basicMaterial)

    return newBranchMesh
}

export const threeGenerator = (scene: THREE.Scene, branchData: BranchData) => {
    const meshs: Array<THREE.Mesh> = []
    const func = (branchData: BranchData, mother?: THREE.Mesh) => {
        if (branchData.depth < 3) return
        const mesh = branch(branchData)
        const axesHelper = new THREE.AxesHelper(15)
        mesh.add(axesHelper)
        //scene.add( axesHelper );

        console.log(
            'adding a branch to the scene:' +
                mesh.position.x +
                ',' +
                mesh.position.y +
                ',' +
                mesh.position.z
        )
        if (mother === undefined) {
            scene.add(mesh)
        } else {
            const pos = mother.position.clone()
            mesh.position.set(pos.x, branchData.pos.start.pos.y, pos.z)
            // const quaternion = new THREE.Quaternion()
            // quaternion.setFromAxisAngle(new THREE.Vector3(0, 0, 1), Math.PI / 4)
            // mesh.applyQuaternion(quaternion)

            scene.add(mesh)
        }

        console.log(branchData)
        const candidate = branchData;
        candidate.pos.start.pos.y += 2.3
        candidate.depth -= 1.0

        func(candidate, mesh)
    }

    func(branchData)
}
