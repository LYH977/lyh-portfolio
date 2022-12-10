import { Bounds } from '@react-three/drei'


import { Shape } from 'three/src/extras/core/Shape'

import { DoubleSide } from 'three/src/constants'
import { angleToRadians } from '../utils/formatter'
import Light from './viewAngle/Light'
import Wall from './primary/Wall'
import Floor from './primary/Floor'
import GlassWall from './glassWall/GlassWall'
import RectShelf from '../models/RectShelf'
import ZoomAndPressable from '../wrapper/ZoomAndPressable'
import { LYHMarkup } from '../2D/Descriptions/LYH'
import { LYH } from '../models/LYH'
import { DefaultAngle } from './viewAngle/DefaultAngle'
import HexShelf from '../models/HexShelf'
import { Y_OFFSET } from '../utils/constants'
const getTriangle = () => {
  const shape = new Shape()
  const x = 1
  // shape.lineTo(0, x)
  // shape.lineTo(1 * x, 0.5 * x)
  shape.lineTo(4, 0)
  shape.lineTo(2, 3.5)

  return shape
}

const FloorPattern = (props: any) => (
  <group { ...props }>
    <group
      rotation={ [angleToRadians(0), angleToRadians(0), angleToRadians(90)] }
    >
      <mesh
        scale={ 0.1 }
        position={ [0, 0, 0] }
        rotation={ [0, 0, angleToRadians(0)] }
      >
        <shapeBufferGeometry args={ [getTriangle()] } />
        <meshStandardMaterial color={ 'green' } side={ DoubleSide } />
      </mesh>
      <mesh
        scale={ 0.1 }
        position={ [0, 0, 0] }
        rotation={ [angleToRadians(180), 0, 0] }
      >
        <shapeBufferGeometry args={ [getTriangle()] } />
        <meshStandardMaterial color={ 'green' } side={ DoubleSide } />
      </mesh>
    </group>

    <group position={ [0.015, -0.015, 0] } rotation={ [0, 0, angleToRadians(-30)] }>
      <mesh
        scale={ 0.1 }
        position={ [0, 0, 0] }
        rotation={ [0, 0, angleToRadians(0)] }
      >
        <shapeBufferGeometry args={ [getTriangle()] } />
        <meshStandardMaterial color={ 'green' } side={ DoubleSide } />
      </mesh>
      <mesh
        scale={ 0.1 }
        position={ [0, 0, 0] }
        rotation={ [angleToRadians(180), 0, 0] }
      >
        <shapeBufferGeometry args={ [getTriangle()] } />
        <meshStandardMaterial color={ 'green' } side={ DoubleSide } />
      </mesh>
    </group>
    <group position={ [-0.015, -0.015, 0] } rotation={ [0, 0, angleToRadians(210)] }>
      <mesh
        scale={ 0.1 }
        position={ [0, 0, 0] }
        rotation={ [0, 0, angleToRadians(0)] }
      >
        <shapeBufferGeometry args={ [getTriangle()] } />
        <meshStandardMaterial color={ 'green' } side={ DoubleSide } />
      </mesh>
      <mesh
        scale={ 0.1 }
        position={ [0, 0, 0] }
        rotation={ [angleToRadians(180), 0, 0] }
      >
        <shapeBufferGeometry args={ [getTriangle()] } />
        <meshStandardMaterial color={ 'green' } side={ DoubleSide } />
      </mesh>
    </group>
  </group>
)

export default function Room(props: any) {
  return (
    <group position={ [0, -1.7, -3] }>
      <Light />

      <Wall />
      <Floor />

      <GlassWall />
      <Bounds clip observe margin={ 1.5 } damping={ 6 }>
        <RectShelf />
      </Bounds>
      <RectShelf />

      <Bounds clip observe margin={ 1.2 } damping={ 6 }>
        <ZoomAndPressable description={ LYHMarkup }>
          { (meshRef: any) => (
            <LYH
              scale={ 0.05 }
              rotation={ [angleToRadians(90), 0, 0] }
              position={ [-1, -1, -4] }
              ref={ meshRef }
            />
          ) }
        </ZoomAndPressable>
        <DefaultAngle />

        <HexShelf
          scale={ 5 }
          position={ [-4.1, 1 + Y_OFFSET, 1] }
          rotation={ [0, angleToRadians(90), 0] }
        />
      </Bounds>
    </group>
  )
}
