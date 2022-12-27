import { FrontSide, DoubleSide } from 'three/src/constants'
import { Box3 } from 'three/src/math/Box3'
import { Vector3 } from 'three/src/math/Vector3'
import { FLOOR_COLOR } from './constants'

export const FRONT_MESH = (
    <meshStandardMaterial color={ FLOOR_COLOR } side={ FrontSide } />
)

export const DOUBLE_SIDE_MESH = (
    <meshStandardMaterial color={ FLOOR_COLOR } side={ DoubleSide } />
)

export const PLANE = <planeGeometry />

export const DEFAULT_VECTOR = new Box3(
    new Vector3(0, 0, 5),
    new Vector3(0, 0, 5)
)


