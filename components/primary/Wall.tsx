import {
  FLOOR_COLOR,
  FLOOR_HEIGHT,
  FLOOR_WIDTH,
  NEON_COLOR,
  Y_OFFSET,
} from '../../utils/constants'
import { angleToRadians } from '../../utils/formatter'

import { useRef } from 'react'
import CeilingPattern from './CeilingPattern'
import { GradientEffect, WALL_GRADIENT_MESH } from './GradientEffect'
import { BackSide } from 'three/src/constants'
import { DOUBLE_SIDE_MESH, FRONT_MESH } from '../../utils/sharedMesh'


const Wall = () => {
  const boxRef = useRef<any>(null)
  return (
    <>

      <mesh //right
        rotation={ [0, angleToRadians(90), 0] }
        position={ [4, 2 + Y_OFFSET, 0] }
        receiveShadow
      >
        <planeGeometry args={ [FLOOR_HEIGHT, FLOOR_WIDTH / 2] } />
        <meshStandardMaterial color={ FLOOR_COLOR } side={ BackSide } />
      </mesh>
      <mesh //left
        rotation={ [0, angleToRadians(90), 0] }
        position={ [-4, 2 + Y_OFFSET, 0] }
        receiveShadow
      >
        <planeGeometry args={ [FLOOR_HEIGHT, FLOOR_WIDTH / 2] } />
        { FRONT_MESH }
      </mesh>

      <group position={ [0, 4 + Y_OFFSET, 0] }>
        <mesh //ceiling
          rotation={ [-angleToRadians(90), 0, 0] }
          receiveShadow
        >
          <planeGeometry args={ [FLOOR_WIDTH, FLOOR_HEIGHT] } />
          { DOUBLE_SIDE_MESH }
        </mesh>
        <CeilingPattern />

      </group>

      <group position={ [-1.9, 0, 0] }>
        <mesh //left top
          rotation={ [0, angleToRadians(90), 0] }
          position={ [-2, 3.9 + Y_OFFSET, -0] }
        >
          <boxGeometry args={ [8, 0.2, 0.1] } />
          { DOUBLE_SIDE_MESH }
        </mesh>
        <GradientEffect
          rotation={ [0, angleToRadians(90), 0] }
          position={ [-2.099, 2.8, 0] }
          scale={ [8, 0.5, 0.5] }
          myMesh={ WALL_GRADIENT_MESH }
        />
      </group>
      <group position={ [5.9, 0, 0] }>
        <mesh //right top
          rotation={ [0, angleToRadians(90), 0] }
          position={ [-2, 3.9 + Y_OFFSET, -0] }
        >
          <boxGeometry args={ [8, 0.2, 0.1] } />
          { DOUBLE_SIDE_MESH }
        </mesh>
        <GradientEffect
          rotation={ [0, angleToRadians(90), 0] }
          position={ [-1.901, 2.8, 0] }
          scale={ [8, 0.5, 0.5] }
          myMesh={ WALL_GRADIENT_MESH }

        />
      </group>
      <mesh //lrft btm
        ref={ boxRef }
        rotation={ [angleToRadians(90), 0, 0] }
        position={ [-3.98, 0.15 + Y_OFFSET, 0] }
      >
        <cylinderGeometry
          args={ [0.02, 0.02, 8, 6, 1, false, 0, Math.PI * 2] }
        />
        <meshStandardMaterial
          emissive='white'
          emissiveIntensity={ 0.8 }
          toneMapped={ false }
          color={ NEON_COLOR }
        />
      </mesh>

      <mesh //right btm
        ref={ boxRef }
        rotation={ [angleToRadians(90), 0, 0] }
        position={ [3.98, 0.15 + Y_OFFSET, 0] }
      >
        <cylinderGeometry
          args={ [0.02, 0.02, 8, 6, 1, false, 0, Math.PI * 2] }
        />
        <meshStandardMaterial
          emissive='white'
          emissiveIntensity={ 0.8 }
          toneMapped={ false }
          color={ NEON_COLOR }
        />
      </mesh>

      <mesh //lcurve left 1
        ref={ boxRef }
        rotation={ [angleToRadians(90), 0, angleToRadians(90 - 75)] }
        position={ [-3.7, 0.15 + Y_OFFSET, -5] }
      >
        <cylinderGeometry
          args={ [0.02, 0.02, 2.1, 6, 1, false, 0, Math.PI * 2] }
        />
        <meshStandardMaterial
          emissive='white'
          emissiveIntensity={ 0.8 }
          toneMapped={ false }
          color={ NEON_COLOR }
        />
      </mesh>
      <mesh //lcurve left 2
        ref={ boxRef }
        rotation={ [angleToRadians(90), 0, angleToRadians(90 - 45)] }
        position={ [-2.72, 0.15 + Y_OFFSET, -6.72] }
      >
        <cylinderGeometry
          args={ [0.02, 0.02, 2.02, 6, 1, false, 0, Math.PI * 2] }
        />
        <meshStandardMaterial
          emissive='white'
          emissiveIntensity={ 0.8 }
          toneMapped={ false }
          color={ NEON_COLOR }
        />
      </mesh>
      <mesh //lcurve left 3
        ref={ boxRef }
        rotation={ [angleToRadians(90), 0, angleToRadians(90 - 15)] }
        position={ [-1, 0.15 + Y_OFFSET, -7.7] }
      >
        <cylinderGeometry
          args={ [0.02, 0.02, 2.1, 6, 1, false, 0, Math.PI * 2] }
        />
        <meshStandardMaterial
          emissive='white'
          emissiveIntensity={ 0.8 }
          toneMapped={ false }
          color={ NEON_COLOR }
        />
      </mesh>
      <mesh //lcurve right 3
        ref={ boxRef }
        rotation={ [angleToRadians(90), 0, angleToRadians(90 + 15)] }
        position={ [1, 0.15 + Y_OFFSET, -7.7] }
      >
        <cylinderGeometry
          args={ [0.02, 0.02, 2.1, 6, 1, false, 0, Math.PI * 2] }
        />
        <meshStandardMaterial
          emissive='white'
          emissiveIntensity={ 0.8 }
          toneMapped={ false }
          color={ NEON_COLOR }
        />
      </mesh>
      <mesh //lcurve right 2
        ref={ boxRef }
        rotation={ [angleToRadians(90), 0, angleToRadians(90 + 45)] }
        position={ [2.72, 0.15 + Y_OFFSET, -6.72] }
      >
        <cylinderGeometry
          args={ [0.02, 0.02, 2.02, 6, 1, false, 0, Math.PI * 2] }
        />
        <meshStandardMaterial
          emissive='white'
          emissiveIntensity={ 0.8 }
          toneMapped={ false }
          color={ NEON_COLOR }
        />
      </mesh>
      <mesh //lcurve right 1
        ref={ boxRef }
        rotation={ [angleToRadians(90), 0, angleToRadians(90 + 75)] }
        position={ [3.7, 0.15 + Y_OFFSET, -5] }
      >
        <cylinderGeometry
          args={ [0.02, 0.02, 2.1, 6, 1, false, 0, Math.PI * 2] }
        />
        <meshStandardMaterial
          emissive='white'
          emissiveIntensity={ 0.8 }
          toneMapped={ false }
          color={ NEON_COLOR }
        />
      </mesh>
    </>
  )
}

export default Wall
