import { Vector3 } from 'three'
import THREE = require('three')

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
