import { Bounds } from '@react-three/drei'
import { angleToRadians } from '../utils/formatter'
import Light from './viewAngle/Light'
import Wall from './primary/Wall'
import Floor from './primary/Floor'
import GlassWall from './glassWall/GlassWall'
import RectShelf from '../models/RectShelf'
import { LYHMarkup } from '../2D/Descriptions/LYH'
import { LYH } from '../models/LYH'
import { DefaultAngle } from './viewAngle/DefaultAngle'
import HexShelf from '../models/HexShelf'
import { Y_OFFSET } from '../utils/constants'
import Zoomable from '../wrapper/Zoomable'


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
      <Bounds clip observe margin={ 1.2 } damping={ 6 }>
        <Zoomable description={ LYHMarkup }>
          { (meshRef: any) => (
            <LYH
              scale={ 0.05 }
              rotation={ [angleToRadians(90), 0, 0] }
              position={ [-1, -1, -4] }
              ref={ meshRef }
            />
          ) }
        </Zoomable>
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
