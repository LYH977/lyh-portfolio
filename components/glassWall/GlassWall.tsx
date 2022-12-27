import { BackSide, DoubleSide } from 'three/src/constants'
import { FLOOR_COLOR, Y_OFFSET } from '../../utils/constants'
import { angleToRadians } from '../../utils/formatter'
import Glass from './Glass'

const GlassWall = () => {
  return (
    <group
      position={ [0, 2.02 + Y_OFFSET, -4] }
      receiveShadow
    >

      <Glass angle={ 75 } position={ [-3.8, 0, -1.02] } />
      <Glass angle={ 45 } position={ [-2.78, 0, -2.78] } />
      <Glass angle={ 15 } position={ [-1.018, 0, -3.8] } />
      <Glass angle={ -15 } position={ [1.018, 0, -3.8] } />
      <Glass angle={ -45 } position={ [2.78, 0, -2.78] } />
      <Glass angle={ -75 } position={ [3.8, 0, -1.02] } />

      <mesh //top
        rotation={ [angleToRadians(90), angleToRadians(0), angleToRadians(180)] }
        position={ [0, 1.98, 0] }
      >
        <circleGeometry args={ [4, 50, 0, Math.PI] } />
        <meshStandardMaterial color={ FLOOR_COLOR } side={ DoubleSide } />
      </mesh>
      <mesh //btm
        rotation={ [angleToRadians(90), angleToRadians(0), angleToRadians(180)] }
        position={ [0, -2.02, 0] }
      >
        <circleGeometry args={ [4, 50, 0, Math.PI] } />
        <meshStandardMaterial color={ FLOOR_COLOR } side={ BackSide } />
      </mesh>
    </group>
  )
}

export default GlassWall
