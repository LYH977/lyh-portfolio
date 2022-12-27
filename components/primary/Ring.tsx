import { angleToRadians } from '../../utils/formatter'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import { DoubleSide } from 'three/src/constants'

const Rings = () => {
  return (
    <group
      scale={ [4, 4, 2] }
      position={ [25, 0, -29] }
      rotation={ [angleToRadians(90), angleToRadians(0), 0] }
    >
      <Ring scale={ 1.5 } color='#021036' index={ 3 }>
        <Ring scale={ 1.25 } speed={ 2 } color='#021036' index={ 2 }>
          <Ring scale={ 1 } speed={ 4 } color='#021036' index={ 1 }>
            <mesh>
              <sphereGeometry
                args={ [0.3, 10, 10, 0, Math.PI * 2, 0, Math.PI] }
              />
              <meshStandardMaterial
                color='yellow'
                side={ DoubleSide }
                toneMapped={ false }
                emissive='yellow'
                emissiveIntensity={ 1.5 }
              />
            </mesh>
          </Ring>
        </Ring>
      </Ring>
    </group>
  )
}

const Ring = ({
  index,
  children = null,
  color,
  scale = 1,
  speed = 1,
  ...rest
}: any) => {
  const ringRef = useRef<any>(null)
  let factor1 = -1
  let factor2 = -1
  const velocity = 1
  let rotation = [angleToRadians(0), 0, 0]

  useFrame(() => {
    if (ringRef.current) {
      if (index === 1) {
        {
          ringRef.current.rotation.y += 0.01 * 4 * factor1 * velocity
        }
      }
      if (index === 2) {
        if (ringRef.current.rotation.x < -Math.PI / 1) {
          factor2 = 1
        } else if (ringRef.current.rotation.x > Math.PI / 1) {
          factor2 = -1
        }
        ringRef.current.rotation.x += 0.01 * 2 * factor2 * velocity
      }
      if (index === 3) ringRef.current.rotation.y += 0.01 * 1 * velocity
    }
  })

  return (
    <group ref={ ringRef } rotation={ rotation } { ...rest }>
      <mesh scale={ scale }>
        <torusGeometry args={ [0.5, 0.05, 10, 50, Math.PI * 2] } />
        <meshStandardMaterial color={ color } side={ DoubleSide } />
      </mesh>
      { children }
    </group>
  )
}

export default Rings
