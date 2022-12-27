import {
  FLOOR_HEIGHT,
  FLOOR_WIDTH,
  Y_OFFSET,
} from '../../utils/constants'
import { angleToRadians } from '../../utils/formatter'
import { FRONT_MESH } from '../../utils/sharedMesh'

const Floor = () => {
  return (
    <group>
      <mesh
        rotation={ [-angleToRadians(90), 0, 0] }
        position={ [0, 0 + Y_OFFSET, 0] }
        receiveShadow
      >
        <planeGeometry args={ [FLOOR_WIDTH, FLOOR_HEIGHT] } />
        { FRONT_MESH }
      </mesh>
    </group>
  )
}

export default Floor