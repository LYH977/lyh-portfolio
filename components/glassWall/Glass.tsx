import { angleToRadians } from '../../utils/formatter'
import { GradientEffect, WALL_GRADIENT_MESH } from '../primary/GradientEffect'
import { DOUBLE_SIDE_MESH, FRONT_MESH } from '../../utils/sharedMesh'
const width = 2


const Glass = ({ position, angle }: any) => {
  return (
    <group position={ position }>
      <group
        rotation={ [angleToRadians(0), angleToRadians(angle), 0] }
        scale={ [0.94, 1, 1] }
      >

        <group position={ [1, -0.015, 0] }>
          <mesh>
            <boxBufferGeometry args={ [width / 10, 4, 0.15] } />
            { FRONT_MESH }
          </mesh>

        </group>

        <mesh //left
          position={ [-1, -0.015, 0] }
        >
          <boxBufferGeometry args={ [width / 10, 4, 0.15] } />

          { FRONT_MESH }
        </mesh>

        <mesh //top
          position={ [0, 1.58, 0] }
        >
          <boxBufferGeometry args={ [width, 4 / 5, 0.15] } />
          { FRONT_MESH }
        </mesh>
        <group //btm
          position={ [0, -1.815, 0] }
        >
          <mesh>
            <boxBufferGeometry args={ [width, 4 / 10, 0.15] } />
            { FRONT_MESH }
          </mesh>
        </group>
        <group position={ [0, 0, 0] }>
          <mesh //left top
            rotation={ [0, angleToRadians(0), 0] }
            position={ [0, 1.88, 0.17] }
          >
            <boxBufferGeometry args={ [2.2, 0.2, 0.1] } />
            { DOUBLE_SIDE_MESH }
          </mesh>
          <GradientEffect
            position={ [0, 1.75, 0.077] }
            scale={ [2.21, 0.5, 0.5] }
            myMesh={ WALL_GRADIENT_MESH }
          />
        </group>
      </group>
    </group>
  )
}

export default Glass
